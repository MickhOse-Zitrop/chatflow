import { Header, IntroBlock, TwoAuthButtons } from "@/shared/components/shared";
import { Button, Checkbox, Field, Input, Label, Separator } from "@/shared/components/ui";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
        <IntroBlock />
        <div className="lg:bg-card py-25.5 flex justify-center items-center">
          <div className="w-fit flex flex-col justify-center items-center gap-10">
            <h1 className="font-bold lg:text-[32px] text-xl">Регистрация</h1>
            <div className="flex flex-col gap-6 lg:w-110 w-68">
              <Input placeholder="Введите email" type="email" />
              <Input placeholder="Введите пароль" type="password" />
              <Input placeholder="Подтвердите пароль" type="password" />
              <Field orientation="horizontal">
                <Checkbox id="terms-checkbox" name="terms-checkbox" />
                <Label
                  htmlFor="terms-checkbox"
                  className="text-sm text-muted-foreground inline"
                >
                  Я полностью ознакомился (-ась) и принимаю{" "}
                  <a href="" target="_blank" className="text-primary underline">
                    Условия использования
                  </a>{" "}
                  и{" "}
                  <a href="" target="_blank" className="text-primary underline">
                    Пользовательское соглашение
                  </a>
                </Label>
              </Field>
              <Button size="lg">Зарегестрироваться</Button>
            </div>
            <Separator />
            <Link
              href="/sign-in"
              className="underline text-primary font-bold text-sm"
            >
              Уже есть аккаунт? Войдите
            </Link>
            <TwoAuthButtons />
          </div>
        </div>
      </div>
    </>
  );
}