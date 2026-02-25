import React from "react";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const IntroBlock: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        "lg:flex hidden flex-col justify-center items-center gap-16 py-25.5",
      )}
    >
      <h1 className="text-center lg:text-[54px] font-black">
        <p>Настройся на разговор</p>
        <p className="bg-linear-to-r from-destructive to-primary bg-clip-text text-transparent">
          без пауз
        </p>
      </h1>
      <div className="grid grid-cols-2 gap-12.5">
        <div className="bg-muted rounded-3xl" />
        <div className="flex flex-col gap-12.5">
          <div className="bg-muted size-45.75 rounded-3xl" />
          <div className="bg-muted size-45.75 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}