import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import PropertyRating from "@/components/card/PropertyRating";
import Amenities from "@/components/properties/Amenities";
//import BookingCalendar from "@/components/properties/BookingCalendar";
import BreadCrumbs from "@/components/properties/BreadCrumbs";
import Description from "@/components/properties/Description";
import ImageContainer from "@/components/properties/ImageContainer";
import PropertyDetails from "@/components/properties/PropertyDetails";
import ShareButton from "@/components/properties/ShareButton";
import UserInfo from "@/components/properties/UserInfo";
import { Separator } from "@/components/ui/separator";
import { fetchPropertyDetails, findExistingReview } from "@/utils/actions";
import { redirect } from "next/navigation";

import DynamicMap from "@/components/properties/DynamicMap";
import SubmitReview from "@/components/reviews/SubmitReview";
import PropertyReviews from "@/components/reviews/PropertyReviews";
import { auth } from "@clerk/nextjs/server";
import DynamicBookingWrapper from "@/components/booking/DynamicBookingWrapper";

const PropertyDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const property = await fetchPropertyDetails(id);
  if (!property) redirect("/");

  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };
  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;
  const avgRating = property.avgRating;
  const reviewCount = property.reviewCount;

  const { userId } = await auth();
  const isNotOwner = userId !== property.profile.clerkId;
  const reviewDoesNotExist =
    userId && isNotOwner && !(await findExistingReview(userId, property.id));

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className="flex items-center justify-between mt-4">
        <h1 className="text-4xl font-bold capitalize">{property.tagline}</h1>
        <div className="flex items-center gap-x-4">
          {/* share button */}
          <ShareButton name={property.name} propertyId={property.id} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />

      <section className="mt-12 lg:grid lg:grid-cols-12 gap-x-12">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-x-4">
            <h1 className="text-xl font-bold">{property.name} </h1>
            <PropertyRating
              inPage
              avgRating={avgRating}
              reviewCount={reviewCount}
            />
          </div>
          <PropertyDetails details={details} />
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator className="mt-4" />
          <Description description={property.description} />
          <Amenities amenities={property.amenities} />

          <DynamicMap countryCode={property.country} />
        </div>

        <div className="flex flex-col items-center lg:col-span-4">
          {/* calendar */}
          {/* <BookingCalendar /> */}
          <DynamicBookingWrapper
            propertyId={property.id}
            price={property.price}
            bookings={property.Booking}
          />
        </div>
      </section>

      {reviewDoesNotExist && <SubmitReview propertyId={property.id} />}
      <PropertyReviews propertyId={property.id} />
    </section>
  );
};

export default PropertyDetailsPage;
