"use client";
import { ChevronsUpDown, Plus, PlusIcon } from "lucide-react";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";

export default function Filters({ slug }) {
  //   const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border border-black">
      <PriceFilter slug={slug} />
      <BrandFilter />
      {/* <Collapsible open={isOpen} onOpenChange={setIsOpen} className=" ">
        <div className="flex items-center justify-between ">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center justify-between w-full p-0"
            >
              <h2>Price</h2>
              <div>
                <Plus />
              </div>
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible> */}
    </div>
  );
}
