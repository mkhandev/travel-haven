import BreadCrumbs from "@/components/properties/BreadCrumbs";
import { fetchPropertyDetails } from "@/utils/actions";
import { redirect } from "next/navigation";

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

  return (
    <section>
      <BreadCrumbs name={property.name} />
    </section>
  );
};

export default PropertyDetailsPage;
