"use client";

import React from "react";
import { signInFlow } from "../types";
import { useState } from "react";

const AuthScreen = () => {
  const [] = useState<signInFlow>("signIn");

  return (
    <div className="h-full flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">Auth Screen</div>
    </div>
  );
};

export default AuthScreen;
