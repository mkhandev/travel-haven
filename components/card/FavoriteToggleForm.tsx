"use client";

import { CardSubmitButton } from "@/components/form/Button";
import FormContainer from "@/components/form/FormContainer";
import { toggleFavoriteAction } from "@/utils/actions";
import { log } from "console";
import { usePathname } from "next/navigation";
import React from "react";

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId?: string | null;
};
const FavoriteToggleForm = ({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) => {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId: favoriteId ?? null,
    pathname,
  });

  //console.log("favoriteId in form", favoriteId);

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={!!favoriteId} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
