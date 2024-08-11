import { useEffect, useState } from "react";

const useQuery = (config = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(config?.url)
        .then((res) => res.json())
        .then((response) => setData(response))
        .finally(() => setIsLoading(false));
    } catch (err) {
      throw new Error(err);
    }
  }, [config?.url]);

  return { data, isLoading };
};

export default useQuery;
