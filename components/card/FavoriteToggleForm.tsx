"use client";

import { CardSubmitButton } from "@/components/form/Button";
import FormContainer from "@/components/form/FormContainer";
import { toggleFavoriteAction } from "@/utils/actions";
import { usePathname } from "next/navigation";
import React from "react";

type FavoriteToggleFormProps = {
  favoriteId: string | null;
  propertyId: string;
};
const FavoriteToggleForm = ({
  favoriteId,
  propertyId,
}: FavoriteToggleFormProps) => {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={!!favoriteId} />
    </FormContainer>
  );
};

export default FavoriteToggleForm;
