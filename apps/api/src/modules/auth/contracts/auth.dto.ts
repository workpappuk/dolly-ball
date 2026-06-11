import { z } from "zod";

export const loginSchema = z.object({
  tenantId: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginDto = z.infer<typeof loginSchema>;
