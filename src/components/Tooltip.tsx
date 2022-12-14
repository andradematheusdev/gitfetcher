import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import clsx from "clsx";
import React from "react";

interface ITooltipProps {
  children: React.ReactNode;
}

export function Tooltip({ children} :ITooltipProps){
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          className={clsx(
            "radix-side-top:animate-slide-down-fade",
            "radix-side-right:animate-slide-left-fade",
            "radix-side-bottom:animate-slide-up-fade",
            "radix-side-left:animate-slide-right-fade",
            "inline-flex items-center rounded-md px-4 py-2.5",
            "bg-gray-800"
          )}
        >
          <TooltipPrimitive.Arrow className="fill-current text-gray-800" />
          <span className="block text-xs leading-none text-gray-100">
            O nome de usuário não pode estar vazio!
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};