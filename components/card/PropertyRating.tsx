import { FaStar } from "react-icons/fa";

const PropertyRating = ({
  inPage,
  avgRating,
  reviewCount,
}: {
  inPage: boolean;
  avgRating: number | null;
  reviewCount: number;
}) => {
  if (!avgRating || reviewCount === 0) return null;

  const className = `flex gap-1 items-center ${inPage ? "text-md" : "text-xs"}`;
  const countText = reviewCount === 1 ? "review" : "reviews";
  const countValue = `(${reviewCount}) ${inPage ? countText : ""}`;

  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {avgRating.toFixed(1)} {countValue}
    </span>
  );
};

export default PropertyRating;
