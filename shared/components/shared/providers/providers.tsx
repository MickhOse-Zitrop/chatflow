"use client";

import React from "react";
import {ThemeProvider} from "@/shared/components/shared/providers/theme-provider";
// import NextTopLoader from "nextjs-toploader";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      {/*<NextTopLoader color="#5ea600" />*/}
    </>
  );
};