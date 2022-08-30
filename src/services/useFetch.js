import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState();

  const fetchData = async (url) => {
    return await axios.get(url).then((response) => {
      return response.data;
    });
  };

  useEffect(() => {
    fetchData(url)
      .then((fData) => setData(fData))
      .catch((e) => setError(e));
  }, [url]);

  return { data, error };
};
