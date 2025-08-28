import { formatQuantity } from "@/utils/format";
import React from "react";

type PropertyDetailsProps = {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
};

const PropertyDetails = ({
  details: { bedrooms, baths, guests, beds },
}: PropertyDetailsProps) => {
  return (
    <p className="font-light text-md">
      <span>{formatQuantity(bedrooms, "bedroom")} &middot;</span>
      <span>{formatQuantity(baths, "bath")} &middot;</span>
      <span>{formatQuantity(guests, "guest")} &middot;</span>
      <span>{formatQuantity(beds, "bed")}</span>
    </p>
  );
};

export default PropertyDetails;
