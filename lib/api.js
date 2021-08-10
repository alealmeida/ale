// export function getURL(path = "") {
//     return `${
// "http://localhost:3000"
//     }${path}`;
//   }
  
  // Helper to make GET requests to Strapi
  export async function fetchAPI(path) {
    const dev = process.env.NODE_ENV != 'production';
    const server = dev ? 'http://localhost:3000' : 'https://alealmeida.co/';

    function getUrl(server) {
      return `${server}`
    }

    const requestUrl = getUrl(path);
    const res = await fetch(requestUrl);
    const data = await res.json();
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
