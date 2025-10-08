import { TabsContent } from "@radix-ui/react-tabs";
import InvestigationComponent from "../manage-patient/patient-profile/component/investigationComponent";
import MedicalComponent from "../manage-patient/patient-profile/component/medicalComponent";
import SurgicalComponent from "../manage-patient/patient-profile/component/surgicalComponent";
import { Card, CardContent } from "../ui/card";
import CollapsibleSectionList from "./collapsibleSectionList";
import RecentVisitComponent from "../manage-patient/patient-profile/component/recentVisitComponent";


export default function MedicalHistoryTab() {
  const sections = [
    { title: "Surgical Info", component: <SurgicalComponent /> },
    { title: "Medical Info", component: <MedicalComponent /> },
    { title: "Investigation", component: <InvestigationComponent /> },
   
  ];

  return (
    <TabsContent value="medical-history">
      <Card className="mt-4">
        <CardContent className="p-4 sm:p-6">
          <CollapsibleSectionList sections={sections} />
        </CardContent>
      </Card>
    </TabsContent>
  );
}
