import { api } from '@/lib/api/api';
import type { BookingRequest, BookingResponse } from '@/types/car';

export const createBooking = async (
  carId: string,
  bookingData: BookingRequest,
): Promise<BookingResponse> => {
  const { data } = await api.post<BookingResponse>(
    `/cars/${carId}/booking-requests`,
    bookingData,
  );

  return data;
};
