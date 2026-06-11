import type { FilterQuery } from "mongoose";
import { TenantModel } from "@/modules/tenant/infrastructure/models/tenant.model";
import type {
  CreateTenantDto,
  ListTenantDto,
  UpdateTenantDto,
} from "@/modules/tenant/contracts/tenant.dto";
import type {
  ITenantRepository,
  TenantListResult,
} from "@/modules/tenant/domain/tenant.repository";

export class MongooseTenantRepository implements ITenantRepository<Record<string, unknown>> {
  async create(input: CreateTenantDto): Promise<Record<string, unknown>> {
    const created = await TenantModel.create(input);
    return created.toObject();
  }

  async list(input: ListTenantDto): Promise<TenantListResult<Record<string, unknown>>> {
    const filter: FilterQuery<Record<string, unknown>> = {};
    if (input.search) {
      filter.$or = [
        { name: { $regex: input.search, $options: "i" } },
        { slug: { $regex: input.search, $options: "i" } },
      ];
    }
    if (typeof input.isActive === "boolean") {
      filter.isActive = input.isActive;
    }

    const sort: Record<string, 1 | -1> = {
      [input.sortBy]: input.sortOrder === "asc" ? 1 : -1,
    };

    const skip = (input.page - 1) * input.limit;

    const [data, total] = await Promise.all([
      TenantModel.find(filter).sort(sort).skip(skip).limit(input.limit).lean(),
      TenantModel.countDocuments(filter),
    ]);

    return { data, total };
  }

  async findById(id: string): Promise<Record<string, unknown> | null> {
    return TenantModel.findById(id).lean();
  }

  async update(id: string, input: UpdateTenantDto): Promise<Record<string, unknown> | null> {
    return TenantModel.findByIdAndUpdate(id, input, { new: true }).lean();
  }

  async delete(id: string): Promise<boolean> {
    const result = await TenantModel.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }
}
