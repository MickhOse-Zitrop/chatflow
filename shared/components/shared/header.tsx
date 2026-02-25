"use client";

import React from "react";
import {cn} from "@/shared/lib/utils";
import {ModeToggle} from "@/shared/components/shared";
import {useTheme} from "next-themes";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const { theme } = useTheme();

  const [iconSrc, setIconSrc] = React.useState("/dark_icon.svg");

  React.useEffect(
    () =>
      theme === "dark"
        ? setIconSrc("/dark_icon.svg")
        : setIconSrc("/light_icon.svg"),
    [theme],
  );

  return (
    <div className={cn(className, "lg:p-6 p-10 select-none fixed w-full")}>
      <div className="w-full px-19.5 py-3.75 flex items-center lg:justify-between justify-center lg:bg-secondary rounded-3xl">
        <Link href="/">
          <div className="flex items-center lg:gap-3.25 gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={iconSrc} alt="Icon" className="lg:w-12 w-6" />
            <h1 className="lg:text-[32px] text-xl font-black">
              <span>Chat</span>
              <span className="text-primary">Flow</span>
            </h1>
          </div>
        </Link>
        <ModeToggle className="hidden lg:inline-flex" />
      </div>
    </div>
  );
};