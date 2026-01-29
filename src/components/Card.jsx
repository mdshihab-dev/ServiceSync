import { useLocation } from "react-router";

const Card = ({ preIcon, posIcon, value, title, percent,faild }) => {
  let {pathname} = useLocation();

  return (
    <div className={`color-card-bg p-3 ${pathname === '/' && 'h-[178px] sm:h-auto'} md:p-6 rounded-[10px] md:rounded-[16px] flex md:flex-row flex-col-reverse gap-2 font-inter items-center md:items-start text-center lg:text-start justify-between`}>
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex text-center md:text-start justify-center lg:justify-start gap-2 md:gap-3">
          {preIcon && <div className="">{preIcon}</div>}
          <p className={`text-gray text-sm font-normal leading-5  ${preIcon && ' h-10 md:h-auto'} `}>{title}</p>
        </div>

        <p className=" text-lg md:text-2xl leading-9 text-white"> {value}</p>
        
        <p className={`${pathname === '/' ? (faild ? 'text-[#fd244a]' : 'text-[#05df72]') : (String(percent).startsWith('+') ? 'text-[#05df72]': 'text-[#90a1b9]')} text-sm font-normal leading-5`}> {percent}</p>
      </div>
      {posIcon && <div className="">{posIcon}</div>}
    </div>
  );
};

export default Card;