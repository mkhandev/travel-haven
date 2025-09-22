import StatsCard from "@/components/admin/StatsCard";
import { fetchReservationStats } from "@/utils/actions";

const Stats = async () => {
  const stats = await fetchReservationStats();

  return (
    <div className="grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
      <StatsCard title="properties" value={stats.properties} />
      <StatsCard title="nights" value={stats.nights} />
      <StatsCard title="amount" value={stats.amount} />
    </div>
  );
};

export default Stats;
