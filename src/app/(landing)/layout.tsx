import React, { type FC, type PropsWithChildren } from "react";
import LandingHeader from "../../modules/landing/header";
import LandingFooter from "../../modules/landing/footer";

const LandingPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-white/50">
      <LandingHeader />
      {children}
      <LandingFooter />
    </div>
  );
};

export default LandingPageLayout;
