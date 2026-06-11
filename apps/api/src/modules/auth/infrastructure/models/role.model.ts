import { model, models, Schema, type InferSchemaType, type Model } from "mongoose";

const roleSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, index: true },
    permissions: { type: [String], default: [] },
  },
  { timestamps: true },
);

export type RoleDocument = InferSchemaType<typeof roleSchema>;

type RoleModelType = Model<RoleDocument>;

export const RoleModel =
  (models.Role as RoleModelType | undefined) || model<RoleDocument>("Role", roleSchema, "roles");
