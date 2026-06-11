import { NextResponse } from "next/server";
import { toErrorPayload } from "@/core/errors";
import { success } from "@/core/http";
import { connectMongo } from "@/lib/mongodb";
import { TenantService } from "@/modules/tenant/application/tenant.service";
import { updateTenantSchema } from "@/modules/tenant/contracts/tenant.dto";

const tenantService = new TenantService();

interface Context {
  params: Promise<{ tenantId: string }>;
}

export async function GET(_: Request, context: Context) {
  try {
    await connectMongo();

    const { tenantId } = await context.params;
    const data = await tenantService.getById(tenantId);

    return NextResponse.json(success(data), { status: 200 });
  } catch (error) {
    const mapped = toErrorPayload(error);
    return NextResponse.json(mapped.body, { status: mapped.statusCode });
  }
}

export async function PATCH(request: Request, context: Context) {
  try {
    await connectMongo();

    const { tenantId } = await context.params;
    const json = await request.json();
    const input = updateTenantSchema.parse(json);

    const data = await tenantService.update(tenantId, input);
    return NextResponse.json(success(data), { status: 200 });
  } catch (error) {
    const mapped = toErrorPayload(error);
    return NextResponse.json(mapped.body, { status: mapped.statusCode });
  }
}

export async function DELETE(_: Request, context: Context) {
  try {
    await connectMongo();

    const { tenantId } = await context.params;
    const data = await tenantService.delete(tenantId);

    return NextResponse.json(success(data), { status: 200 });
  } catch (error) {
    const mapped = toErrorPayload(error);
    return NextResponse.json(mapped.body, { status: mapped.statusCode });
  }
}
