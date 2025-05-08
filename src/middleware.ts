/**
 * A/B test middleware example
 * `myMiddlewareFunction` - We call an API to fetch flags and set cookies based on the response.
 * `<ExamplePage />` - A simple page that uses the cookies to determine which image to show.

 * Points to discuss:
 * (1) When I visit the "/example" page, I always end up on "/404". Why is that?
 * (2) When I land on the "/example" and the "ab-testimage" flag is true, I still don't see the correct image. Why is that?
 */

import { type NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const imageFlagKey = "ab-test-image";

  let response = NextResponse.next();

  if (url.pathname === "/example") {
    try {
      const { data } = await axios.get("/feature-flags");

      if (data[imageFlagKey]) {
        response.headers.append("Set-Cookie", "show-test-image=true");
      }

      return response;
    } catch (e) {
      url.pathname = "/404";
      return NextResponse.redirect(url);
    }
  }
}

export const config = {
  matcher: ["/example"],
};
