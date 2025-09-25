import CountryFlagAndName from "@/components/card/CountryFlagAndName";
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import PropertyRating from "@/components/card/PropertyRating";
import { formatCurrency } from "@/utils/format";
import { PropertyCardProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

type PropertyCardComponentProps = {
  property: PropertyCardProps;
  favoriteId?: string | null; // added favoriteId prop
};

const PropertyCard = ({ property, favoriteId }: PropertyCardComponentProps) => {
  const { name, image, price } = property;
  const { country, id: propertyId, tagline } = property;
  return (
    <article className="relative group">
      <Link href={`/properties/${propertyId}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={image}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            alt={name}
            className="object-cover transition-transform duration-500 transform rounded-md group-hover:scale-110"
          />
        </div>

        <div className="flex items-center justify-between">
          <h3 className="mt-1 text-sm font-semibold">
            {name.substring(0, 30)}
          </h3>
          {/* property rating */}
          <PropertyRating inPage={true} propertyId={propertyId} />
        </div>

        <p className="mt-1 text-sm text-muted-foreground">
          {tagline.substring(0, 40)}
        </p>
        <div className="flex items-center justify-between mt-1">
          <p className="mt-1 text-sm">
            <span className="font-semibold">{formatCurrency(price)} </span>
            night
          </p>
          {/* country and flag */}
          <CountryFlagAndName countryCode={country} />
        </div>
      </Link>

      <div className="absolute top-5 right-5 z-5">
        {/* favorite toggle button */}
        <FavoriteToggleButton propertyId={propertyId} favoriteId={favoriteId} />
      </div>
    </article>
  );
};

export default PropertyCard;
