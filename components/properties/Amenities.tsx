import Title from "@/components/properties/Title";
import { Amenity } from "@/utils/amenities";
import React from "react";
import { LuFolderCheck } from "react-icons/lu";

const Amenities = ({ amenities }: { amenities: string }) => {
  const amenitiesList: Amenity[] = JSON.parse(amenities);
  const noAmenities = amenitiesList.every((amenity) => !amenity.selected);
  if (noAmenities) return null;

  return (
    <div className="mt-4">
      <Title text="What this place offers" />
      <div className="grid md:grid-cols-2 gap-x-4">
        {amenitiesList.map((amenity) => {
          if (!amenity.selected) return null;
          return (
            <div key={amenity.name} className="flex items-center mb-2 gap-x-4">
              <LuFolderCheck className="w-6 h-6 text-primary" />
              <span className="text-sm font-light capitalize">
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
