import { model, models, Schema, type InferSchemaType, type Model } from "mongoose";

const tenantSchema = new Schema(
  {
    name: { type: String, required: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
    branding: {
      appName: { type: String, required: true },
      logoUrl: { type: String },
      theme: {
        primary: { type: String, required: true },
        secondary: { type: String, required: true },
        accent: { type: String, required: true },
      },
    },
    enabledSports: { type: [String], default: [] },
    enabledLanguages: { type: [String], default: ["en"] },
    featureToggles: { type: Map, of: Boolean, default: {} },
    subscriptionPlan: {
      type: String,
      enum: ["FREE", "PREMIUM", "PRO", "ENTERPRISE"],
      default: "FREE",
    },
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true },
);

export type TenantDocument = InferSchemaType<typeof tenantSchema>;

type TenantModelType = Model<TenantDocument>;

export const TenantModel =
  (models.Tenant as TenantModelType | undefined) ||
  model<TenantDocument>("Tenant", tenantSchema, "tenants");
