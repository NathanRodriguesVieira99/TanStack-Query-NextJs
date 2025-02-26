"use client";

import { UseAxiosProps } from "@/interfaces/useAxios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAxios = <T,>(url: string): UseAxiosProps<T> => {
  const fetch = async () => {
    const response = await axios.get<T>(url);

    return response.data;
  };

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["fetchs", url],
    queryFn: fetch,
  });

  return {
    data: data ?? null,
    error: isError ? error?.message ?? "Ocorreu um erro" : null,
    loading: isLoading,
  };
};
