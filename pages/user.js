import React from "react";
import Link from "next/link";
import Main from "../src/components/layouts/main";

export default function Index() {
  return (
    <Main>
      <div>
        <h1>user page</h1>
        <Link href="/">
          <a> Index</a>
        </Link>
      </div>
    </Main>
  );
}
