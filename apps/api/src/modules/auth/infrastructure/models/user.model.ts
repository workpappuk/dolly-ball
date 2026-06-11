import { model, models, Schema, type InferSchemaType, type Model } from "mongoose";

const userSchema = new Schema(
  {
    tenantId: { type: String, required: true, index: true },
    email: { type: String, required: true, index: true },
    name: { type: String, required: true },
    passwordHash: { type: String, required: true },
    roles: { type: [String], default: ["TENANT_ADMIN"] },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

userSchema.index({ tenantId: 1, email: 1 }, { unique: true });

export type UserDocument = InferSchemaType<typeof userSchema>;

type UserModelType = Model<UserDocument>;

export const UserModel =
  (models.User as UserModelType | undefined) || model<UserDocument>("User", userSchema, "users");
