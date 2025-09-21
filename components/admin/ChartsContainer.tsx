import Chart from "@/components/admin/Chart";
import { fetchChartsData } from "@/utils/actions";
import React from "react";

const ChartsContainer = async () => {
  const bookings = await fetchChartsData();

  if (!bookings) return null;

  return <Chart data={bookings} />;
};

export default ChartsContainer;
