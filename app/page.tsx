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
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10 text-blue-900">
          My Personal Blog
        </h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white p-6 rounded-2xl shadow-lg border"
            >
              <h2 className="text-2xl font-semibold text-blue-800">
                {post.title}
              </h2>

              <p className="mt-3 text-gray-700 leading-relaxed">
                {post.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}