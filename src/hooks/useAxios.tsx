"use client";

import { UseAxiosProps } from "@/interfaces/useAxios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAxios = <T,>(url: string): UseAxiosProps<T> => {
  
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["fetchs", url],
    queryFn: async () => {
      const response = await axios.get<T>(url);

      return response.data;
    },
  });

  return {
    data: data || null,
    error: isError ? (error as Error).message : null,
    loading: isLoading,
  };
};
