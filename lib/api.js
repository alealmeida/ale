export function getURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:3000"
    }${path}`;
  }
  
  // Helper to make GET requests to Strapi
  export async function fetchAPI(path) {
    const requestUrl = getURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }



const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}
