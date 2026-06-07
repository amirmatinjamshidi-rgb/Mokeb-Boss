import { MyReservationsContent } from "@/features/components/KarvanReservation/KarvanReservationContent";
import { mockReservations } from "@/features/data/MockReserVations";

export default function MyReservationsPage() {
  return <MyReservationsContent reservations={mockReservations} />;
}
