import { Button, Separator } from "@/shared/components/ui";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-10 w-fit flex flex-col lg:gap-25 gap-20 items-center justify-center">
        <div className="flex flex-col gap-10 items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dark_icon.svg"
            alt="ChatFlow"
            className="lg:size-64 size-46"
          />
          <h1 className="lg:text-[64px] text-[32px] font-black">
            <span>Chat</span>
            <span className="text-primary">Flow</span>
          </h1>
          <span className="text-center lg:text-[32px] font-semibold">
            <p>Настройся на разговор</p>
            <p className="bg-linear-to-r from-destructive to-primary bg-clip-text text-transparent">
              без пауз
            </p>
          </span>
        </div>
        <Link href="/authorize" className="w-full">
          <Button size="lg" className="w-full gap-4">
            <span>Начать общение</span>
            <MoveRight />
          </Button>
        </Link>
        <div className="flex flex-col gap-6 justify-between items-center">
          <Separator className="bg-muted-foreground" />
          <p className="text-sm text-muted-foreground text-center">
            Copyright ©2026 ChatFlow Inc. All rights reserved. Made with ♡ by
            MickhOse Zitrop
          </p>
        </div>
      </div>
    </div>
  );
}