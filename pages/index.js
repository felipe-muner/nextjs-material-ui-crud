import React from "react";
import Link from "next/link";
import Main from "../src/components/layouts/main";

export default function Index() {
  return (
    <Main>
      <Link href="/about">
        <a> Move to about</a>
      </Link>
      <br />
      <Link href="/product">
        <a> Move to product</a>
      </Link>
      <br />
      <Link href="/sale">
        <a> Move to sale</a>
      </Link>
      <br />
      <Link href="/user">
        <a> Move to user</a>
      </Link>
    </Main>
  );
}
