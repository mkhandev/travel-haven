"use client";

import { SignOutButton } from "@clerk/nextjs";
import React from "react";
import { toast } from "sonner";

const SignOutLink = () => {
  const handleLogout = () => {
    toast.success("You have been signed out.");
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOutLink;
