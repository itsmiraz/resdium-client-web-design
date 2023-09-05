export async function fetchBlogDetails(id) {
    const res = await fetch(`https://resdium.netlify.app/api/blogs/${id}`);
    const data = await res.json();
    return data;
  }
  