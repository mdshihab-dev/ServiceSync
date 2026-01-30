import { Link, } from "react-router";
import profileImage from "../assets/images/profile-image.png";

const Settings = () => {
  const profileData = [
    {
      id: 1,
      text: "Full Name:",
      para: "Jane D.",
    },
    {
      id: 2,
      text: "Email:",
      para: "jane@gmail.com",
    },
    {
      id: 3,
      text: "Store Name:",
      para: "Ubreakfix Store",
    },
    {
      id: 4,
      text: "Store Address:",
      para: "123 Main Street, New York, NY 10001",
    },
  ];

  return (
    <>
        <div className="mt-3 md:pt-6 md:max-w-137.5 w-full px-2 md:px-0 pr-4 sm:pr-0">
        <div className="font-inter font-normal sm:text-2xl text-base leading-9 text-white flex gap-x-4 sm:gap-x-16">
          <button>Profile</button>
          <button>Password Settings</button>
        </div>

        <div className="sm:mt-10 mt-5">
          <h3 className="font-inter font-normal text-base sm:text-xl leading-[150%] text-white mb-2">
            Profile Image
          </h3>
          <div className="flex sm:gap-x-2 gap-x-1">
            <div className=" size-20 md:size-25.5">
              <img src={profileImage} alt="profileImage" className="w-full" />
            </div>
            <div className="mb-2 place-self-end">
              <Link
                to={"/settings/profile"}
                className={`py-1 px-2 rounded-[12px] inset-shadow border-b border-[rgba(255,255,255,0.50)]`}
              >
                <span className=" font-inter whitespace-nowrap font-medium sm:text-base text-xs leading-[150%] text-white">
                  Edit Profile
                </span>
              </Link>
            </div>
          </div>
          <div className="sm:pt-6 pt-4">
            {profileData.map((item, id) => (
              <div
                key={id}
                class="flex items-center sm:py-4 py-2 border-b border-[#192d70] last:border-transparent"
              >
                <p class="font-inter font-medium text-sm sm:text-xl leading-[150%] text-white sm:w-51.5 min-w-[120px] whitespace-nowrap ">
                  {item.text}
                </p>
                <p class="font-inter font-normal text-sm sm:text-xl leading-[150%] text-white  ">
                  {item.para}
                </p>
              </div>
            ))}
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;


