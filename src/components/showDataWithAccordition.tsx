"use client";

import * as React from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function NestedCollapsibleAccordion() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="p-6">
      {/* Outer collapsible */}
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button>{open ? "Hide Names" : "Show Names"}</Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
          {/* Inner accordion */}
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="name1">
              <AccordionTrigger>👤 John Doe</AccordionTrigger>
              <AccordionContent>
                <p>Details about John Doe…</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="name2">
              <AccordionTrigger>👤 Mary Smith</AccordionTrigger>
              <AccordionContent>
                <p>Details about Mary Smith…</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="name3">
              <AccordionTrigger>👤 Alex Johnson</AccordionTrigger>
              <AccordionContent>
                <p>Details about Alex Johnson…</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="name4">
              <AccordionTrigger>👤 Sarah Lee</AccordionTrigger>
              <AccordionContent>
                <p>Details about Sarah Lee…</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}