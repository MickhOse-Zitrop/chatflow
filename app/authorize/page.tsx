import {ChooseUser, Header, IntroBlock, TwoAuthButtons,} from "@/shared/components/shared";
import {Avatar, AvatarFallback, AvatarImage, Separator,} from "@/shared/components/ui";
import Link from "next/link";
import React from "react";
import {SquareArrowRightExit, UserRoundPlus} from "lucide-react";

export default function SignInPage() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
        <IntroBlock />
        <div className="lg:bg-card py-25.5 flex justify-center items-center">
          <div className="w-fit flex flex-col justify-center items-center gap-10">
            <div className="flex flex-col gap-7 lg:w-110 w-68 max-h-120 overflow-y-auto scrollbar">
              <div className="flex flex-col gap-5">
                <ChooseUser
                  name="MickhOse Zitrop"
                  authorization={true}
                  avatar="https://github.com/shadcn.png"
                />
                <ChooseUser name="Даниил Колбасенко" authorization={false} />
              </div>
              <Link href="/sign-in">
                <div className="flex justify-between items-center px-6 py-3 w-full bg-secondary rounded-3xl cursor-pointer hover:opacity-85 transition">
                  <div className="flex gap-4 items-center">
                    <Avatar className="size-13">
                      <AvatarImage src="" alt="@shadcn" className="grayscale" />
                      <AvatarFallback>
                        <UserRoundPlus />
                      </AvatarFallback>
                    </Avatar>
                    <h1 className="font-bold text-2xl">Добавить аккаунт</h1>
                  </div>
                  <SquareArrowRightExit className="text-muted-foreground" />
                </div>
              </Link>
            </div>
            <Separator />
            <TwoAuthButtons />
          </div>
        </div>
      </div>
    </>
  );
}