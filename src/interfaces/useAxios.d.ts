export interface UseAxiosProps<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}
