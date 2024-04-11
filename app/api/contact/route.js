import { connectToDatabase } from "../../../utils/db";

export async function POST(request) {
  const data = await request.json();
  try {
    const db = await connectToDatabase();
    const collection = db.collection("leads");
    const result = await collection.insertOne(data); // Insert data into leads collection
    return new Response(JSON.stringify({ message: "Lead successfully received" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error occurred during POST request:", error);
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
