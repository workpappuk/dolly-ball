import bcrypt from "bcryptjs";
import { AppError } from "@/core/errors";
import { JwtService } from "@/modules/auth/application/jwt.service";
import { UserRepository } from "@/modules/auth/infrastructure/repositories/user.repository";

export class AuthService {
  constructor(
    private readonly userRepository = new UserRepository(),
    private readonly jwtService = new JwtService(),
  ) {}

  async login(input: { tenantId: string; email: string; password: string }) {
    const user = await this.userRepository.findByTenantAndEmail(input.tenantId, input.email);

    if (!user || !user.isActive) {
      throw new AppError(401, "INVALID_CREDENTIALS", "Invalid credentials");
    }

    const validPassword = await bcrypt.compare(input.password, user.passwordHash);
    if (!validPassword) {
      throw new AppError(401, "INVALID_CREDENTIALS", "Invalid credentials");
    }

    const accessToken = this.jwtService.signAccessToken({
      sub: String(user._id),
      tenantId: user.tenantId,
      email: user.email,
      roles: user.roles,
    });

    return {
      accessToken,
      user: {
        id: String(user._id),
        tenantId: user.tenantId,
        email: user.email,
        name: user.name,
        roles: user.roles,
      },
    };
  }

  async getProfile(userId: string) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new AppError(404, "USER_NOT_FOUND", "User not found");
    }

    return {
      id: String(user._id),
      tenantId: user.tenantId,
      email: user.email,
      name: user.name,
      roles: user.roles,
      isActive: user.isActive,
    };
  }
}
