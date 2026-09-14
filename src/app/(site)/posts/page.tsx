import { Suspense } from "react";

import { RoutePending } from "../_components/layout/route-ready.component";
import { PostsIndex } from "./_components/posts-index.component";
export const metadata = { title: "Posts — miku00ee00" };
export default function Page() {
  return (
    <Suspense fallback={<RoutePending />}>
      <PostsIndex />
    </Suspense>
  );
}
