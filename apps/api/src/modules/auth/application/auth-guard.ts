import { AppError } from "@/core/errors";
import { JwtService } from "@/modules/auth/application/jwt.service";

const jwtService = new JwtService();

export function getAuthUserIdFromRequest(request: Request): string {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError(401, "UNAUTHORIZED", "Missing bearer token");
  }

  const token = authHeader.replace("Bearer ", "").trim();
  const payload = jwtService.verifyAccessToken(token);
  return payload.sub;
}
