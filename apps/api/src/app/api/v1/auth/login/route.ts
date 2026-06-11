import { NextResponse } from "next/server";
import { toErrorPayload } from "@/core/errors";
import { success } from "@/core/http";
import { connectMongo } from "@/lib/mongodb";
import { AuthService } from "@/modules/auth/application/auth.service";
import { loginSchema } from "@/modules/auth/contracts/auth.dto";

const authService = new AuthService();

export async function POST(request: Request) {
  try {
    await connectMongo();

    const json = await request.json();
    const input = loginSchema.parse(json);

    const data = await authService.login(input);

    return NextResponse.json(success(data), { status: 200 });
  } catch (error) {
    const mapped = toErrorPayload(error);
    return NextResponse.json(mapped.body, { status: mapped.statusCode });
  }
}
