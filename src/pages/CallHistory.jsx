import { InputInputGroup } from '@/components/Input';
import { SearchIcon } from "lucide-react";
import DropdownButton from "../components/DropdownButton";
import CallList from "../components/CallList";
import CallDetails from "../components/CallDetails";
import {callLogsData} from '../projectData/data'
import { useState } from "react";

const CallHistory = () => {

  const [active, setActive] = useState(callLogsData[0])

  const issueArray = [
    "All Issues",
    "Screen",
    "Software",
    "Battery",
    "Unknown",
  ];
  const callType = [
    "All Type",
    "AI Resolved",
    "Warm Transfer",
    "Appointment",
    "Dropped",
  ];
  const dateArray = ["Today", "Last Week", "Last Month", "This Year", "All"];
  return (
    <div className="m-6">
      <div className="flex justify-between gap-6 ">
        
        <div className="flex flex-col gap-6 grow max-w-1/2 ">
          <InputInputGroup
          icon={<SearchIcon />}
          className={" color-card-bg pl-4 h-12.5   "}
          />
          
          <CallList active={active} setActive={setActive} />

        </div>

        <div className="flex flex-col gap-6 grow max-w-1/2 ">
          <div className="flex gap-6 justify-end">
            <DropdownButton items={callType} />
            <DropdownButton items={issueArray} />
            <DropdownButton items={dateArray} />
          </div>

          <CallDetails data={active} />
        </div>
      </div>
    </div>
  );
};

export default CallHistory;