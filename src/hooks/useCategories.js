import { useEffect, useState } from "react";
import { getCategories } from "helpers/api/categories";

export const useCategories = () => {
  const [ctg, setCtg] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await getCategories();

        const { status, data } = res;

        if (status !== 200) {
          setLoading(true);
        } else {
          setLoading(false);
          setCtg(data);
        }
      } catch (error) {
        alert(error);
      }
    };

    getCategory();
  }, []);

  return { ctg, loading };
};
