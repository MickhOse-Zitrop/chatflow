import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator
} from "@/shared/components/ui";
import { EllipsisVertical, SquareArrowRightExit, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface Props {
  name: string;
  authorization: boolean;
  avatar?: string;
  className?: string;
}

export const ChooseUser: React.FC<Props> = ({
  className,
  name,
  avatar,
  authorization,
}) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between items-center px-6 py-3 w-full bg-secondary rounded-3xl cursor-pointer hover:opacity-85 transition",
      )}
    >
      <div className="flex gap-4 items-center">
        <Avatar className="size-13">
          <AvatarImage src={avatar} alt="@shadcn" className="grayscale" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-2xl">{name}</h1>
          {!authorization && (
            <p className="text-muted-foreground text-xs">
              Требуется авторизация
            </p>
          )}
        </div>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon" variant="ghost">
            <EllipsisVertical />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit flex flex-col gap-2 p-2">
          {authorization && (
            <>
              <Button variant="ghost" className="text-destructive">
                Выйти
                <SquareArrowRightExit />
              </Button>
              <Separator />
            </>
          )}
          <Button variant="ghost" className="text-destructive">
            Удалить
            <X />
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};