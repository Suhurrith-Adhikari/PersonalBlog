import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("blog");

    const posts = await db.collection("posts").find({}).toArray();

    return Response.json(posts);
  } catch (error) {
    return Response.json({ error: "Failed to fetch posts" });
  }
}