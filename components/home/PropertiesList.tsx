import PropertyCard from "@/components/card/PropertyCard";
import { PropertyCardWithRating } from "@/utils/types";

type PropertiesListProps = {
  properties: PropertyCardWithRating[];
  favoriteMap?: Record<string, string | null>;
};

const PropertiesList = ({ properties, favoriteMap }: PropertiesListProps) => {
  return (
    <section className="grid gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property) => {
        const favoriteId = favoriteMap?.[property.id] ?? null;

        return (
          <PropertyCard
            key={property.id}
            property={property}
            favoriteId={favoriteId}
          />
        );
      })}
    </section>
  );
};

export default PropertiesList;
