import { connectToDatabase } from "@/lib/mongoDb";

export default async function handler(req, res,next) {
  try {


    
      const client = await connectToDatabase();
      const db = client.db("resdium");
     
      // Sort the data in descending order based on the 'createdAt' field.
      const forms = await db.collection("blogs").find({}).sort({ createdAt: -1 }).toArray();

      res.status(200).send(forms);

  
  } catch (err) {
    return res
      .status(500)
      .send("Something went wrong during server-side processing");
  }
}