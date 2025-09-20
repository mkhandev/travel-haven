import StatsCard from "@/components/admin/StatsCard";
import { fetchStats } from "@/utils/actions";
import React from "react";

async function StatsContainer() {
  const data = await fetchStats();

  return (
    <div className="grid gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
      <StatsCard title="users" value={data.usersCount || 0} />
      <StatsCard title="properties" value={data.propertiesCount || 0} />
      <StatsCard title="bookings" value={data.bookingsCount || 0} />
    </div>
  );
}

export default StatsContainer;
