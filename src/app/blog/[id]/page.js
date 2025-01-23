async function fetchPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
  }
  
  export default async function BlogDetails({ params }) {
    const post = await fetchPost(params.id);
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="mt-2">{post.body}</p>
      </div>
    );
  }
  