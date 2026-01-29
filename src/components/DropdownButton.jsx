import { useState } from "react";
import DropdownIcon from "../assets/icons/DropdownIcon";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownButton = ({ items }) => {
  const [range, setRange] = useState(items[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={"bg-[#1D293D] border border-[#2B7FFF20] text-white"}
        >
          {range} <DropdownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 bg-[#0F172B] border border-[#2B7FFF20] text-white ">
        <DropdownMenuGroup>
          <DropdownMenuLabel></DropdownMenuLabel>

          {items.map((item, index) => (
            <DropdownMenuCheckboxItem
              key={item + index}
              checked={range === item}
              onSelect={() => setRange(item)}
            >
              {item}
            </DropdownMenuCheckboxItem>
          ))}

          {/* <DropdownMenuCheckboxItem
            checked={range === "This Month"}
            onCheckedChange={setShowActivityBar}
            onSelect={() => setRange("This Month")}
          >
            This Month
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={range === "This Year"}
            onCheckedChange={setShowPanel}
            onSelect={() => setRange("This Year")}
          >
            This Year
          </DropdownMenuCheckboxItem> */}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownButton;