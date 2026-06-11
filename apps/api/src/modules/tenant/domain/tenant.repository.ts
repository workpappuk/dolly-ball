import type { CreateTenantDto, ListTenantDto, UpdateTenantDto } from "@/modules/tenant/contracts/tenant.dto";

export interface TenantListResult<T> {
  data: T[];
  total: number;
}

export interface ITenantRepository<TTenant = unknown> {
  create(input: CreateTenantDto): Promise<TTenant>;
  list(input: ListTenantDto): Promise<TenantListResult<TTenant>>;
  findById(id: string): Promise<TTenant | null>;
  update(id: string, input: UpdateTenantDto): Promise<TTenant | null>;
  delete(id: string): Promise<boolean>;
}
