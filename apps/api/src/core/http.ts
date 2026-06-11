export type ApiSuccess<T> = {
  success: true;
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
};

export function success<T>(data: T, meta?: ApiSuccess<T>["meta"]): ApiSuccess<T> {
  return { success: true, data, meta };
}
