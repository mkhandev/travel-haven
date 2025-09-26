import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavoriteIdsForUser, fetchFavorites } from "@/utils/actions";
import { currentUser } from "@clerk/nextjs/server";

const FavoritesPage = async () => {
  const properties = await fetchFavorites();

  if (properties.length === 0) {
    return <EmptyList />;
  }

  let favoriteMap: Record<string, string | null> = {};
  const user = await currentUser();
  if (user) {
    favoriteMap = await fetchFavoriteIdsForUser(user.id);
  }

  return <PropertiesList properties={properties} favoriteMap={favoriteMap} />;
};

export default FavoritesPage;
