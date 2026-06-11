export const isServerError = (status?: number) => status !== undefined && status >= 500 && status < 600;

export const retryRequest = async <T>(fn: () => Promise<T>, retries = 2, delay = 600) => {
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt === retries) break;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw lastError;
};
