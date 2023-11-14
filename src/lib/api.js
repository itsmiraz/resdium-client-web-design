export async function fetchBlogDetails(url) {
    const res = await fetch(`https://resdium.netlify.app/api/blogs/${url}`);
    const data = await res.json();
    return data;
  }
  