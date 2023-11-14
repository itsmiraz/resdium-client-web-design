import { connectToDatabase } from "@/lib/mongoDb";

export default async function handler(req, res) {
    try {
      
            const client = await connectToDatabase();
            const db = client.db("resdium");
            const url = req.query.url; // Assuming the ID is available in the request parameters
            // Convert the id to ObjectId
            if (!url) {
                return res.status(404).json({ error: "ID is Required" })
            }
            // Find the document with the specified ObjectId
            const blog = await db.collection("blogs").findOne({ siteUrl : url });
    
            if (!blog) {
                return res.status(404).json({ error: "blog not found" });
        }
            // Send the found document as a response (if needed)
            res.status(200).json(blog);

      
     
    } catch (err) {
        console.error("Error while fetching data from MongoDB:", err);
        res.status(500).json({ error: "Something went wrong" });
    }
}