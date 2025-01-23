import Link from 'next/link';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <ul className="mt-4 space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
