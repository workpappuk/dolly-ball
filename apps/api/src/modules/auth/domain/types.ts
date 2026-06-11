export type UserRole =
  | "SUPER_ADMIN"
  | "TENANT_ADMIN"
  | "EDITOR"
  | "ANALYST"
  | "CUSTOMER_SUPPORT";

export interface Permission {
  key: string;
  description: string;
}

export interface Role {
  name: UserRole;
  permissions: string[];
}

export interface User {
  id: string;
  tenantId: string;
  email: string;
  name: string;
  roles: UserRole[];
  isActive: boolean;
}
