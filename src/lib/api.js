export async function fetchBlogDetails(id) {
    const res = await fetch(`https://resdium.vercel.app/api/blogs/${id}`);
    const data = await res.json();
    return data;
  }
  