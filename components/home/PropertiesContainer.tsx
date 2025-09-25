import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavoriteIdsForUser, fetchProperties } from "@/utils/actions";
import { PropertyCardProps } from "@/utils/types";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const PropertiesContainer = async ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results."
        message="Try changing or removing some of your filters."
        btnText="Clear Filters"
      />
    );
  }

  let favoriteMap: Record<string, string | null> = {};
  const user = await currentUser();
  if (user) {
    favoriteMap = await fetchFavoriteIdsForUser(user.id);
  }

  return <PropertiesList properties={properties} favoriteMap={favoriteMap} />;
};

export default PropertiesContainer;
