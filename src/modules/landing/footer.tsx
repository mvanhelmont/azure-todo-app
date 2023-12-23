import React from "react";
import config from "../../config";
import { Button } from "../../components/ui/button";
import Image from "next/image";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex w-full justify-between px-20 py-5">
      <p>
        {currentYear} {config.name}. Open Source project
      </p>
      <Button className="flex items-center gap-x-2" variant="ghost">
        <Image src="github.svg" alt="GitHub logo" width={20} height={20} />
        Star 128
      </Button>
    </footer>
  );
};

export default LandingFooter;
