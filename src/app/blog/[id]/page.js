async function fetchPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogDetails({ params }) {
  const post = await fetchPost(params.id);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto -mt-52">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 capitalize">{post.title}</h1>
        <p className="text-gray-600 leading-relaxed capitalize">{post.body}</p>
      </div>
    </div>
  );
}
