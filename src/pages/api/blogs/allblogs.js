import { connectToDatabase } from "@/lib/mongoDb";

export default async function handler(req, res, next) {
  try {
    const { page = 1, perPage = 9 } = req.query;
    const currentPage = parseInt(page);
    const itemsPerPage = parseInt(perPage);
    const client = await connectToDatabase();
    const db = client.db("resdium");
// Query the database to get all blogs (without pagination)
const allBlogs = await db.collection("blogs").find({}).toArray();

// Calculate the total number of blogs
const totalBlogs = allBlogs.length;
    // Calculate the skip value based on the page and perPage values
    const skip = (currentPage - 1) * itemsPerPage;

    // Query the database with pagination and sorting
    const blogs = await db
      .collection("blogs")
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(itemsPerPage)
      .toArray();
    res.status(200).send({blogs, totalBlogs});
  } catch (err) {
    return res
      .status(500)
      .send("Something went wrong during server-side processing");
  }
}
