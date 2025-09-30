"use client";

import clsx from "clsx";
import React from "react";

type BoundedProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Bounded<T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...restProps
}: BoundedProps<T>) {
  const Comp = as || "div";

  return (
    <Comp
      className={clsx("px-4 md:px-6 first:pt-10", className)}
      {...(restProps as React.ComponentPropsWithoutRef<T>)}
    >
      {children}
    </Comp>
  );
}
