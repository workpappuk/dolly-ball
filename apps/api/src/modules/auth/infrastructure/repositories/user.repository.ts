import { UserModel } from "@/modules/auth/infrastructure/models/user.model";

export class UserRepository {
  async findByTenantAndEmail(tenantId: string, email: string) {
    return UserModel.findOne({ tenantId, email: email.toLowerCase() }).lean();
  }

  async findById(id: string) {
    return UserModel.findById(id).lean();
  }
}
