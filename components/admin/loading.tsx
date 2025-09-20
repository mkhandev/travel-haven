import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const StatsLoadingContainer = () => {
  return (
    <div className="grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );
};

const LoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-full h-20 rounded" />
      </CardHeader>
    </Card>
  );
};

export const ChartsLoadingContainer = () => {
  return <Skeleton className="mt-10 w-full h-[300px] rounded" />;
};
