export const config = {
  mongodbUri: process.env.MONGODB_URI ?? "mongodb://localhost:27017/sportos",
  redisUrl: process.env.REDIS_URL ?? "redis://localhost:6379",
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET ?? "replace_me",
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET ?? "replace_me",
  accessTokenTtl: "15m",
} as const;
