import { Header, IntroBlock, TwoAuthButtons } from "@/shared/components/shared";
import { Button, Input, Separator } from "@/shared/components/ui";
import Link from "next/link";

export default function SignInPage() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
        <IntroBlock />
        <div className="lg:bg-card py-25.5 flex justify-center items-center">
          <div className="w-fit flex flex-col justify-center items-center gap-10">
            <h1 className="font-bold lg:text-[32px] text-xl">
              Войти в аккаунт
            </h1>
            <div className="flex flex-col gap-6 lg:w-110 w-68">
              <Input placeholder="Введите email" type="email" />
              <Input placeholder="Введите пароль" type="password" />
              <Button size="lg">Войти</Button>
            </div>
            <Separator />
            <Link
              href="/sign-up"
              className="underline text-primary font-bold text-sm"
            >
              Еще нет аккаунта? Создайте
            </Link>
            <TwoAuthButtons />
          </div>
        </div>
      </div>
    </>
  );
}