import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/unauthorized") return response;
    return NextResponse.redirect(new URL("/login?setup=1", request.url));
  }

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headers) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        Object.entries(headers).forEach(([name, value]) => response.headers.set(name, value));
      },
    },
  });

  if (request.nextUrl.pathname === "/login") return response;

  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) {
    const destination = new URL("/login", request.url);
    destination.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(destination);
  }

  const { data: admin, error: adminError } = await supabase
    .from("platform_admins")
    .select("role,status")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError || !admin || admin.status !== "ACTIVE" ||
      !["SUPER_ADMIN", "PLATFORM_ADMIN"].includes(admin.role)) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
