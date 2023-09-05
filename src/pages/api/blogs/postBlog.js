import { connectToDatabase } from "@/lib/mongoDb";

export default async function handler(req, res) {
  try {
    const client = await connectToDatabase();
    const db = client.db("resdium");
    const GeneralFormCollection = db.collection("blogs");
    switch (req.method) {
      case "POST":
        try {
            let bodyObject = req.body;
            // Add a timestamp to the form data before inserting it.
            bodyObject.createdAt = new Date();

            let result = await GeneralFormCollection.insertMany(bodyObject);
            res.status(200).json(result);
        } catch (err) {
          return res
            .status(500)
            .send("Something went wrong during server-side processing");
        }
        break;

      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    res
      .status(500)
      .send("Something went wrong during server-side processing 2");
  }
}