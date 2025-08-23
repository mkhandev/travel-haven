import PropertyCard from "@/components/card/PropertyCard";
import { PropertyCardProps } from "@/utils/types";

const PropertiesList = ({
  properties,
}: {
  properties: PropertyCardProps[];
}) => {
  return (
    <section className="grid gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {properties.map((property) => {
        return <PropertyCard key={property.id} property={property} />;
      })}
    </section>
  );
};

export default PropertiesList;
