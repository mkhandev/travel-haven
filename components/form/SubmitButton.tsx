"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { IoReload } from "react-icons/io5";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export const SubmitButton = ({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className} `}
      size={size}
    >
      {pending ? (
        <>
          {" "}
          <IoReload className="w-4 h-4 mr-2 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};
