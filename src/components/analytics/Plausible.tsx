"use client";
import React from "react";

let Provider: React.ComponentType<any> = ({ children }: any) => <>{children}</>;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  Provider = require("next-plausible").default;
} catch {}

export default Provider;

