import {callLogsData} from "../projectData/data";
import { Badge } from "@/components/ui/badge";
import CallIcon from "../assets/icons/card-icons/CardPhoneIcon";
import ClockLite from "../assets/icons/ClockLiteIcon";
import TickIcon from "../assets/icons/TickIcon";

const CallList = ({active, setActive}) => {
  return (
     <section className="rounded-[12px] md:rounded-[16px] color-card-bg pb-6 ">
      <h3 className="font-inter font-normal text-[20px] leading-7 text-white mb-4 cursor-pointer p-4 border-b border-[#2B7FFF20] ">
        Call list
      </h3>
      {callLogsData.map((item) => (
        <div
          className={`flex justify-between p-3 sm:p-4 relative ${item.id === active.id ? "border-b-3 border-[#2B7FFF]" : item.id === callLogsData[callLogsData.length - 1].id ? "" : "border border-[#2B7FFF10]  cursor-pointer "} `}
          key={item.id}
          onClick={() => setActive(item)}
        >
          <div className="flex flex-col gap-3 sm:gap-5 grow">
            <div className="flex gap-3 sm:gap-4 ">
                <CallIcon className={'size-8 sm:size-12'} />

              <div className="font-inter font-normal">
                <p className="text-white max-sm:text-sm sm:text-base leading-6 ">
                  {item.phoneNumber}
                </p>
                <small className="text-gray text-xs leading-5 ">
                  {item.dateTime[0] + " • " + item.dateTime[1]}
                </small>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4.5 max-sm:text-xs sm:text-sm ">
              <div className="flex items-center gap-1 text-gray">
                  <ClockLite className={''} />
                <time className="">{item.duration}</time>
              </div>
              <div className="flex items-center gap-1 text-gray">
                  <TickIcon className={"size-4 "} />
                <p>{item.outcome}</p>
              </div>
                <Badge className="bg-[#2B7FFF20] text-info rounded-[4px] py-0.5 px-2 sm:px-4 font-inter leading-5 max-sm:text-[10px] sm:text-sm ">
                  {item.issueType}
                </Badge>
            </div>
          </div>

          <div className="absolute right-2.5 ">
            <Badge
              className={` rounded-[4px] sm:rounded-[8px] md:rounded-[10px] py-1  px-2 font-inter leading-5 max-sm:text-[10px] text-xs 
                ${item.callType === "AI Resolved" && "text-success bg-[#00C95020] border border-[#00C95030] "}
                ${item.callType === "Warm Transfer" && "text-warn bg-[#FF690020] border border-[#FF690030] "}
                ${item.callType === "Appointment" && "text-info bg-[#2B7FFF20] border border-[#2B7FFF30] "}
                ${item.callType === "Dropped" && "text-error bg-[#FF150020] border border-[#FF690030] "} `}
            >
              {item.callType}
            </Badge>
          </div>
        </div>
      ))}
    </section>

  );
};

export default CallList;