import { model, models, Schema, type InferSchemaType, type Model } from "mongoose";

const permissionSchema = new Schema(
  {
    key: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
);

export type PermissionDocument = InferSchemaType<typeof permissionSchema>;

type PermissionModelType = Model<PermissionDocument>;

export const PermissionModel =
  (models.Permission as PermissionModelType | undefined) ||
  model<PermissionDocument>("Permission", permissionSchema, "permissions");
