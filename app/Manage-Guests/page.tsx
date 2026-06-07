import { MyAccompanyContent } from "@/features/components/ZaerManagement/KarvanManagementContent";
import { mockZaer } from "@/features/data/ZaerMock";

export default function ManageGuestsPage() {
  return <MyAccompanyContent initialAccompanies={mockZaer} />;
}
