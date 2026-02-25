import React from "react";
import { Button } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const TwoAuthButtons: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex gap-5 items-center justify-center", className)}>
      <Button variant="secondary" size="icon">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/google.svg" alt="Google" className="h-6" />
      </Button>
      <Button variant="secondary" size="icon">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/yandex.svg" alt="Yandex" className="h-6" />
      </Button>
      <Button variant="secondary" size="icon">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/apple.svg" alt="Apple" className="h-6" />
      </Button>
      <Button variant="secondary" size="icon">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/github.svg" alt="Github" className="h-6" />
      </Button>
    </div>
  );
};