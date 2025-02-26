"use client";

import type { ReactNode } from "react";

import { queryClient } from "../services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
