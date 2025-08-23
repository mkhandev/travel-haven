import { Button } from "@/components/ui/button";
import React from "react";
import { FaHeart } from "react-icons/fa";

const FavoriteToggleButton = ({ propertyId }: { propertyId: string }) => {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
