import Link from "next/link";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export const metadata = {
  title: "Home | Blogs-360",
};

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Blog Posts
        </h1>
        <ul className="divide-y divide-gray-200">
          {posts.map((post) => (
            <li
              key={post.id}
              className="py-4 hover:bg-gray-50 transition duration-200 flex justify-between"
            >
              <Link
                href={`/blog/${post.id}`}
                className="text-lg text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
              <Link href={`/blog/${post.id}`} className="btn">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
