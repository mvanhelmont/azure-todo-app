import React from "react";
import Image from "next/image";
import { buttonVariants } from "../../components/ui/button";
import Link from "next/link";

const LandingHeader = () => {
  return (
    <header className="flex w-full items-center justify-between px-20 py-5">
      <Link href="/">
        <Image
          src="/quickee-logo.svg"
          alt="Quickee logo"
          width={117}
          height={32}
          priority
        />
      </Link>

      <div className="flex gap-x-3">
        <Link
          href="/about"
          className={buttonVariants({
            variant: "link",
          })}
        >
          About
        </Link>
        <Link
          href="/pricing"
          className={buttonVariants({
            variant: "link",
          })}
        >
          Pricing
        </Link>
      </div>
      <div className="flex">
        <Link
          href="/auth/sign-in"
          className={buttonVariants({ variant: "default" })}
        >
          Start for free
        </Link>
      </div>
    </header>
  );
};

export default LandingHeader;
