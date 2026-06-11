import { z } from "zod";

const themeSchema = z.object({
  primary: z.string().min(3),
  secondary: z.string().min(3),
  accent: z.string().min(3),
});

export const createTenantSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2).regex(/^[a-z0-9-]+$/),
  branding: z.object({
    appName: z.string().min(2),
    logoUrl: z.string().url().optional(),
    theme: themeSchema,
  }),
  enabledSports: z.array(z.enum(["cricket", "football", "kabaddi"])).min(1),
  enabledLanguages: z.array(z.string().min(2)).min(1),
  featureToggles: z.record(z.boolean()).default({}),
  subscriptionPlan: z.enum(["FREE", "PREMIUM", "PRO", "ENTERPRISE"]).default("FREE"),
});

export const updateTenantSchema = createTenantSchema.partial();

export const listTenantSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().optional(),
  isActive: z.coerce.boolean().optional(),
  sortBy: z.enum(["createdAt", "name", "slug"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type CreateTenantDto = z.infer<typeof createTenantSchema>;
export type UpdateTenantDto = z.infer<typeof updateTenantSchema>;
export type ListTenantDto = z.infer<typeof listTenantSchema>;
