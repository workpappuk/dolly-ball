import { createClient } from "redis";
import { config } from "@/core/config";

type RedisClient = ReturnType<typeof createClient>;

let client: RedisClient | null = null;

export function getRedisClient(): RedisClient {
  if (!client) {
    client = createClient({ url: config.redisUrl });
    client.on("error", (error) => {
      console.error("Redis error", error);
    });
  }

  return client;
}
