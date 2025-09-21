import { fetchChartsData } from "@/utils/actions";
import React from "react";

const ChartsContainer = async () => {
  const bookings = await fetchChartsData();
  return <div>ChartsContainer</div>;
};

export default ChartsContainer;
