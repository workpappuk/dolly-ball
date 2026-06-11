import { AppError } from "@/core/errors";
import type {
  CreateTenantDto,
  ListTenantDto,
  UpdateTenantDto,
} from "@/modules/tenant/contracts/tenant.dto";
import { MongooseTenantRepository } from "@/modules/tenant/infrastructure/repositories/mongoose-tenant.repository";

export class TenantService {
  constructor(private readonly repository = new MongooseTenantRepository()) {}

  async create(input: CreateTenantDto) {
    return this.repository.create(input);
  }

  async list(input: ListTenantDto) {
    return this.repository.list(input);
  }

  async getById(id: string) {
    const tenant = await this.repository.findById(id);
    if (!tenant) {
      throw new AppError(404, "TENANT_NOT_FOUND", "Tenant not found");
    }

    return tenant;
  }

  async update(id: string, input: UpdateTenantDto) {
    const tenant = await this.repository.update(id, input);
    if (!tenant) {
      throw new AppError(404, "TENANT_NOT_FOUND", "Tenant not found");
    }

    return tenant;
  }

  async delete(id: string) {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new AppError(404, "TENANT_NOT_FOUND", "Tenant not found");
    }

    return { deleted: true };
  }
}
