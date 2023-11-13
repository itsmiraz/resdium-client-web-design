import { connectToDatabase } from "@/lib/mongoDb";

export default async function handler(req, res, next) {
  try {
    const client = await connectToDatabase();
    const db = client.db("resdium");
    const featuredblogs = await db
      .collection("blogs")
      .find({}).sort({ createdAt: -1 }).limit(5).toArray()

    res.send(featuredblogs);
  } catch (err) {
    return res
      .status(500)
      .send("Something went wrong during server-side processing");
  }
}
