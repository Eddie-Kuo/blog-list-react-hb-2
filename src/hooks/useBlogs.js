import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogs';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchData();
  }, []);
}

// with the data fetched, we can then move to main.js where we can call the whole function set in hooks to display the values of each item