"use client";
import { useEffect, useState } from "react";
import { amenities, Amenity } from "@/utils/amenities";
import { Checkbox } from "@/components/ui/checkbox";

function AmenitiesInput({ defaultValue }: { defaultValue?: Amenity[] }) {
  const mergeWithDefaults = (dbValues?: Amenity[]): Amenity[] => {
    return amenities.map((a) => {
      const found = dbValues?.find((d) => d.name === a.name);
      return {
        ...a,
        selected: found ? found.selected : false,
      };
    });
  };

  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    mergeWithDefaults(defaultValue)
  );

  useEffect(() => {
    setSelectedAmenities(mergeWithDefaults(defaultValue));
  }, [defaultValue]);

  const handleChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) => {
      return prev.map((a) => {
        if (a.name === amenity.name) {
          return { ...a, selected: !a.selected };
        }
        return a;
      });
    });
  };

  return (
    <section>
      <input
        type="hidden"
        name="amenities"
        value={JSON.stringify(selectedAmenities)}
      />
      <div className="grid grid-cols-2 gap-4">
        {selectedAmenities.map((amenity) => {
          return (
            <div key={amenity.name} className="flex items-center space-x-2">
              <Checkbox
                id={amenity.name}
                checked={amenity.selected}
                onCheckedChange={() => handleChange(amenity)}
              />
              <label
                htmlFor={amenity.name}
                className="flex items-center text-sm font-medium leading-none capitalize gap-x-2"
              >
                {amenity.name} <amenity.icon className="w-4 h-4" />
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default AmenitiesInput;
