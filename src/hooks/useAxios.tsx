'use client';
import { useEffect, useState } from "react";
import axios from "axios";

interface UseAxiosProps<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export const useAxios = <T,>(url: string): UseAxiosProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocorreu um erro desconhecido.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};
