"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
import Head from "next/head";
import React from "react";

let Provider: React.ComponentType<any> = ({ children }: any) => <>{children}</>;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  Provider = require("next-plausible").default;
} catch { }

export default Provider;

