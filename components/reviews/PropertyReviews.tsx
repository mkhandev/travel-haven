import Title from "@/components/properties/Title";
import ReviewCard from "@/components/reviews/ReviewCard";
import { fetchPropertyReviews } from "@/utils/actions";

const PropertyReviews = async ({ propertyId }: { propertyId: string }) => {
  const reviews = await fetchPropertyReviews(propertyId);

  return (
    <div className="mt-8">
      <Title text="Reviews" />
      <div className="grid gap-8 mt-4 md:grid-cols-2">
        {reviews.map((review, index) => {
          const { comment, rating } = review;
          const { firstName, profileImage } = review.profile;

          const reviewInfo = {
            comment,
            rating,
            firstName,
            profileImage,
          };

          return <ReviewCard key={index} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
};

export default PropertyReviews;
