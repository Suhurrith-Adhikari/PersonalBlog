type Post = {
  _id?: string;
  title: string;
  content: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">My Personal Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}