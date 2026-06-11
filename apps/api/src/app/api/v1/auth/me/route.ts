import { NextResponse } from "next/server";
import { toErrorPayload } from "@/core/errors";
import { success } from "@/core/http";
import { connectMongo } from "@/lib/mongodb";
import { AuthService } from "@/modules/auth/application/auth.service";
import { getAuthUserIdFromRequest } from "@/modules/auth/application/auth-guard";

const authService = new AuthService();

export async function GET(request: Request) {
  try {
    await connectMongo();

    const userId = getAuthUserIdFromRequest(request);
    const data = await authService.getProfile(userId);

    return NextResponse.json(success(data), { status: 200 });
  } catch (error) {
    const mapped = toErrorPayload(error);
    return NextResponse.json(mapped.body, { status: mapped.statusCode });
  }
}
