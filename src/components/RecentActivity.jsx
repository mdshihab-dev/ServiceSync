import {activitiesData} from "../projectData/data";

const RecentActivity = () => {
  return (
    <div className=" grow w-full md:max-w-1/2 p-3 md:p-6 rounded-[12px] md:rounded-[16px] color-card-bg">
      <h3 className="font-inter font-normal text-[20px] leading-7 text-white mb-4 cursor-pointer">
        Recent Activity
      </h3>

      <div className="flex flex-col gap-y-3">
        {activitiesData.map((activity, index) => (
          <div key={index} className="rounded-[10px] p-3 flex gap-x-3 bg-[#16223d] cursor-pointer">
            <div className={`size-2 rounded-full shrink-0 mt-2 ${activity.dotColor}`}></div>

            <div>
              <p className="font-inter font-normal text-[14px] leading-5 text-white mb-1">
                {activity.text}
              </p>
              <p className="font-inter font-normal text-xs leading-4 text-light-gray">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;