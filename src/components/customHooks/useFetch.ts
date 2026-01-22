import { useEffect, useState } from "react";


export function useFetch ( url: string ) {
  const [ post, setPost ] = useState({});
  const [loading, setLoading] = useState(true);

  async function getPost () {
    const response = await fetch(url);
    const json = await response.json();
    setPost(json);
    setLoading(false);
  }

  useEffect( () => {
    getPost();
  },[url]);

  useEffect(() => {
    // call getPost every 10s and clear on unmount or when `url` changes
    const id = setInterval(getPost, 10 * 1000);
    return () => clearInterval(id);
  },[url]);

  return {
    post,
    loading
  }
}
