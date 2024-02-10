import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2024 Evently. All right reserved.</p>
      </div>
    </footer>
  );
}