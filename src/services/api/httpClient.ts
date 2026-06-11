import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, CancelTokenSource } from 'axios';
import { getAuthToken, getRefreshToken, setAuthToken } from './tokenService';

const API_BASE_URL = 'https://api.dolly-ball.local/v1';

export class HttpClient {
  private client: AxiosInstance;
  private refreshPromise: Promise<void> | null = null;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 20000
    });

    this.client.interceptors.request.use(async (config) => {
      const token = await getAuthToken();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.client.interceptors.response.use(
      (response) => response,
      this.handleError.bind(this)
    );
  }

  private async handleError(error: AxiosError) {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      await this.refreshToken();
      const token = await getAuthToken();
      if (token && originalRequest && originalRequest.headers) {
        originalRequest.headers.Authorization = `Bearer ${token}`;
      }
      return this.client(originalRequest as AxiosRequestConfig);
    }

    return Promise.reject(error);
  }

  private async refreshToken() {
    if (!this.refreshPromise) {
      this.refreshPromise = (async () => {
        const refreshToken = await getRefreshToken();
        if (!refreshToken) throw new Error('Missing refresh token');
        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, { refreshToken });
        await setAuthToken(response.data.token);
        this.refreshPromise = null;
      })();
    }
    return this.refreshPromise;
  }

  request<T>(config: AxiosRequestConfig) {
    const source: CancelTokenSource = axios.CancelToken.source();
    return {
      promise: this.client.request<T>({ ...config, cancelToken: source.token }),
      cancel: () => source.cancel('Request cancelled')
    };
  }
}

export const httpClient = new HttpClient();
