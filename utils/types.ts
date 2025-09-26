export type actionFunction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string; redirectTo?: string }>;

export type PropertyCardProps = {
  image: string;
  id: string;
  name: string;
  tagline: string;
  country: string;
  price: number;
};

export type PropertyCardWithRating = PropertyCardProps & {
  avgRating: number | null;
  reviewCount: number;
};

export type DateRangeSelect = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type Booking = {
  checkIn: Date;
  checkOut: Date;
};
