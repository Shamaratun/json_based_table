"use client";

import { TabsList, TabsTrigger } from "@/app/ui/tabs";
import { Stethoscope, Clock, StickyNote, LucideIcon } from "lucide-react";

interface TabItem {
  value: string;
  label: string;
  icon: LucideIcon;
  bgColor?: string;
  hoverColor?: string;
}

interface ReusableTabsProps {
  tabs: TabItem[];
}


function ReusableTabs({ tabs }: ReusableTabsProps) {
  return (
    <div className="w-full overflow-visible">
  <TabsList className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4 w-full">
    {tabs.map((tab) => {
      const Icon = tab.icon;
      return (
        <TabsTrigger
          key={tab.value}
          value={tab.value}
          className={`flex items-center gap-2 px-4 py-2 text-sm sm:text-base text-gray-800 rounded-lg  transition
            ${tab.hoverColor || "hover:bg-gray-200"}`}
            style={{ minHeight: "50px" }}
        >
          <Icon size={20} /> {tab.label}
        </TabsTrigger>
      );
    })}
  </TabsList>
</div>
  );
}


export default function PatientTabs() {
  const tabs: TabItem[] = [
    {
      value: "medical-history",
      label: "Medical History",
      icon: Stethoscope,
      bgColor: "bg-cyan-100",
      hoverColor: "hover:bg-cyan-200",
    },
    {
      value: "recent-visits",
      label: "Recent Visits",
      icon: Clock,
      bgColor: "bg-yellow-100",
      hoverColor: "hover:bg-yellow-200",
    },
    {
      value: "notes",
      label: "Notes",
      icon: StickyNote,
      bgColor: "bg-pink-100",
      hoverColor: "hover:bg-pink-200",
    },
  ];

  return <ReusableTabs tabs={tabs} />;
}
