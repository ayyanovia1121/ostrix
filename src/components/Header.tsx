import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="container mx-auto flex items-center justify-between p-4">
      <Link
        href="/"
        className="text-2xl font-bold inline-flex items-center gap-2"
      >
        <Image src="/assets/logo.svg" alt="Logo" width={40} height={40} />
        <span className="text-white font-bold">Ostrix</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/signin"
          className="text-sm text-gray-200 hover:text-white hover:underline"
        >
          Sign In
        </Link>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
