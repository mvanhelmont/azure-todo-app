import React from "react";
import Icons from "../../components/icons";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";

const LandingPage = () => {
  return (
    <main className="relative flex w-full flex-1 flex-col items-center justify-center gap-y-6">
      <div className="flex items-center gap-x-2 rounded-full border border-slate-200 px-3 py-2">
        <Icons.server width={16} height={16} />
        <p className="font-medium text-slate-800">
          Another TODO app, but deployed on
        </p>
        <Image
          src="azure.svg"
          alt="Microsoft Azure logo"
          width={20}
          height={20}
        />
        <span className="font-bold text-[#008AD7]">Azure</span>
      </div>
      <h1 className="w-full max-w-[1012px] bg-gradient-to-r from-[#F58400] to-[#00A1FB] bg-clip-text text-center text-[72px] font-bold leading-[125%] -tracking-[1.44px] text-transparent">
        Manage your time without thinking too much!
      </h1>
      <p className="text-xl font-light uppercase text-slate-800">
        What can be better to get everything done on time?
      </p>
      <div className="flex gap-x-3">
        <Link
          href="/auth/sign-in"
          className={buttonVariants({ variant: "outline" })}
        >
          Sign In
        </Link>
        <Link
          href="/auth/sign-in"
          className={buttonVariants({ variant: "default" })}
        >
          Start for Free
        </Link>
      </div>

      {/* Pattern */}
      {/* TODO: Fix the size */}
      <Image
        src="landing-pattern.svg"
        alt="Pattern"
        width={2012}
        height={1525}
        className="height-[1525px] width-[2012px] absolute -left-[286px] -top-[334px] z-[-1]"
      />
    </main>
  );
};

export default LandingPage;
