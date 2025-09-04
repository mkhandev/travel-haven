"use client";

import { Button } from "@/components/ui/button";
import { LucidePenSquare, LucideTrash2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <IoReload className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};

type actionType = "edit" | "delete";

export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <LucidePenSquare />;
      case "delete":
        return <LucideTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? <IoReload className=" animate-spin" /> : renderIcon()}
    </Button>
  );
};
