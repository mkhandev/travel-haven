import FavoriteToggleForm from "@/components/card/FavoriteToggleForm";
import CardSignInButton from "@/components/form/CardSignInButton";

//import { fetchFavoriteIds } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";

const FavoriteToggleButton = async ({
  propertyId,
  favoriteId,
}: {
  propertyId: string;
  favoriteId?: string | null;
}) => {
  const { userId } = await auth();

  if (!userId) {
    return <CardSignInButton />;
  }

  //const favoriteId = await fetchFavoriteIds({ propertyId });

  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
};

export default FavoriteToggleButton;
