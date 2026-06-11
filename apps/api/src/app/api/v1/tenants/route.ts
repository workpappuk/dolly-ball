import { NextResponse } from "next/server";
import { toErrorPayload } from "@/core/errors";
import { success } from "@/core/http";
import { connectMongo } from "@/lib/mongodb";
import { TenantService } from "@/modules/tenant/application/tenant.service";
import {
  createTenantSchema,
  listTenantSchema,
} from "@/modules/tenant/contracts/tenant.dto";

const tenantService = new TenantService();

export async function GET(request: Request) {
  try {
    await connectMongo();

    const { searchParams } = new URL(request.url);
    const input = listTenantSchema.parse(Object.fromEntries(searchParams.entries()));

    const { data, total } = await tenantService.list(input);
    return NextResponse.json(success(data, { page: input.page, limit: input.limit, total }), {
      status: 200,
    });
  } catch (error) {
    const mapped = toErrorPayload(error);
    return NextResponse.json(mapped.body, { status: mapped.statusCode });
  }
}

export async function POST(request: Request) {
  try {
    await connectMongo();

    const json = await request.json();
    const input = createTenantSchema.parse(json);

    const data = await tenantService.create(input);
    return NextResponse.json(success(data), { status: 201 });
  } catch (error) {
    const mapped = toErrorPayload(error);
    return NextResponse.json(mapped.body, { status: mapped.statusCode });
  }
}
