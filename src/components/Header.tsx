import React,{useEffect,useState} from "react";
import { DownOutlined } from "@ant-design/icons";
const Header : React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    
    window.addEventListener('scroll', handleScroll);

 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <div className={`py-4 px-14 flex justify-between fixed left-0 right-0 bg-[#fffafa] ${isScrolled ? "bg-white" : ''}`}>
      {/* logo */}
      <div className="flex gap-8 items-center">
        <svg
          aria-label="Vercel logotype"
          height="22"
          role="img"
          viewBox="0 0 283 64"
        >
          <path
            d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
            fill="var(--geist-foreground)"
          ></path>
        </svg>

        {/* products */}
        <div className="flex gap-4 text-gray-500  ">
          {/* product */}
          <div className="cursor-pointer hover:bg-[#FFC0A1] px-4 py-2 rounded-full">
            <span className="text-lg">Products</span>
            <span className="text-[12px] px-2">
              <DownOutlined />
            </span>
          </div>
          <div className="cursor-pointer hover:bg-[#FFC0A1] px-4 py-2 rounded-full">
            <span className="text-lg">Solutions</span>
            <span className="text-[12px] px-2">
              <DownOutlined />
            </span>
          </div>
          <div className="cursor-pointer hover:bg-[#FFC0A1] px-4 py-2 rounded-full">
            <span className="text-lg">Resources</span>
            <span className="text-[12px] px-2">
              <DownOutlined />
            </span>
          </div>
          <div className="cursor-pointer hover:bg-[#FFC0A1] px-4 py-2 rounded-full">
            <span className="text-lg">Docs</span>
          </div>
          <div className="cursor-pointer hover:bg-[#FFC0A1] px-4 py-2 rounded-full">
            <span className="text-lg">Pricing</span>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="flex gap-3 items-center">
        <span className="text-lg text-gray-500">Contact</span>
        <button className="text-lg  bg-white px-3  rounded-lg border">
          Log In
        </button>
        <button className="text-lg bg-black text-white px-3   rounded-lg border">
          signup
        </button>
      </div>
    </div>
  );
};

export default Header;
