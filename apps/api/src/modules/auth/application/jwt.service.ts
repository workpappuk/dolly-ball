import jwt from "jsonwebtoken";
import { config } from "@/core/config";

export interface AccessTokenPayload {
  sub: string;
  tenantId: string;
  email: string;
  roles: string[];
}

export class JwtService {
  signAccessToken(payload: AccessTokenPayload): string {
    return jwt.sign(payload, config.jwtAccessSecret, {
      expiresIn: config.accessTokenTtl,
    });
  }

  verifyAccessToken(token: string): AccessTokenPayload {
    return jwt.verify(token, config.jwtAccessSecret) as AccessTokenPayload;
  }
}
