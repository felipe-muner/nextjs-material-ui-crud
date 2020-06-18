import React from "react";
import Link from "next/link";
import Main from "../src/components/layouts/main";

export default function Index() {
  return (
    <Main>
      <Link href="/about">
        <a> Move to about</a>
      </Link>
    </Main>
  );
}
