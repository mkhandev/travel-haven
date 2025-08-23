import CategoriesList from "@/components/home/CategoriesList.tsx";
import PropertiesContainer from "@/components/home/PropertiesContainer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const { category, search } = await searchParams;
  return (
    <section>
      <CategoriesList category={category} search={search} />
      <PropertiesContainer category={category} search={search} />
    </section>
  );
}
