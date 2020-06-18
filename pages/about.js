import React from "react";
import Link from "next/link";
import Main from "../src/components/layouts/main";

export default function Index() {
  return (
    <Main>
      <Link href="/">
        <a> Move to index</a>
      </Link>
    </Main>
  );
}
