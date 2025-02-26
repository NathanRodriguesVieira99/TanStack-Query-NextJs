"use client";

import { UseAxiosProps } from "@/interfaces/useAxios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAxios = <T,>(url: string): UseAxiosProps<T> => {
  
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchs", url],
    queryFn: async () => {
      const response = await axios.get<T>(url);

      return response.data;
    },
  });

  return {
    data: data || null,
    error: error instanceof Error ? error.message : null,
    loading: isLoading,
  };
};
