"use client";

import * as React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export default function ShowDataWithCollapsible() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="p-6">
      <Collapsible open={open} onOpenChange={setOpen}>
        {/* Button */}
        <CollapsibleTrigger asChild>
          <Button>{open ? "Hide Data" : "Show Data"}</Button>
        </CollapsibleTrigger>

        {/* Data appears below */}
        <CollapsibleContent className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
          <p className="text-gray-700">📋 Patient Information:</p>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Patient Name: John Doe</li>
            <li>Age: 32</li>
            <li>Condition: Stable</li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}