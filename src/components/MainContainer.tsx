import React, { useState } from "react";
import { CaretUpOutlined } from "@ant-design/icons";
import { apps } from "../utils/constants";
const MainContainer: React.FC = () => {
  const [light, setLight] = useState<string[]>(apps.AILight);
  const [description, setDescription] = useState<string[]>(apps.AIDescription);
  const [category, setCategory] = useState<string>("AI");

  const handleClick = (category: string) => {
    switch (category) {
      case "AI":
        setLight(apps.AILight);
        setDescription(apps.AIDescription);
        setCategory(category);
        break;
      case "Apps":
        setLight(apps.AppsLight);
        setDescription(apps.AppsDescription);
        setCategory(category);
        break;
      case "Marketing":
        setLight(apps.MarketingLight);
        setDescription(apps.MarketingDescription);
        setCategory(category);
        break;
      case "Ecommerce":
        setLight(apps.EcommerceLight);
        setDescription(apps.EcommerceDescription);
        setCategory(category);
        break;
      default:
        setLight(apps.AILight);
        setDescription(apps.AIDescription);
    }
  };

  return (
    <div className="pt-[100px] ">
      <div className="border flex justify-center items-center  w-[900px] ml-auto mr-auto flex-col">
        <h1 className="w-[700px] text-center text-4xl font-semibold tracking-tight p-16">
          <span>Vercel is the Frontend Cloud.</span>{" "}
          <span className="text-gray-400">
            Build, scale, and secure a faster, personalized web.
          </span>{" "}
        </h1>
        <div className="flex gap-6 ">
          <button className="bg-black text-white px-4 py-2 rounded-full text-lg flex items-center gap-2">
            <span className="text-2xl">
              <CaretUpOutlined />
            </span>
            Start Deploying
          </button>
          <button className="bg-white  px-4 py-2 rounded-full text-lg border">
            Get a Demo
          </button>
        </div>
        <div className="  text-3xl mt-20 border px-20 py-20 ">
          <span className="w-[200px] tracking-tight font-bold ">
            Develop with your favorite tools Launch globally, instantly Keep
            pushing.
          </span>
        </div>
        <div className="border w-full justify-evenly flex ">
          <div className="border-r p-4 w-[35%]">
            <span className="text-4xl font-bold tracking-tighter text-gray-500">
              The Web's Best
            </span>
            <div className="flex gap-4 flex-wrap mt-10">
              <button
                className={`bg-white-400 px-6 py-2 rounded-full text-3xl font-semibold border ${
                  category === "AI"
                    ? "bg-black text-white px-4 py-2 rounded-full"
                    : ""
                }`}
                onClick={() => handleClick("AI")}
              >
                AI
              </button>
              <button
                className={`bg-white-400 px-6 py-2 rounded-full text-3xl font-semibold border ${
                  category === "Apps"
                    ? "bg-black text-white px-4 py-2 rounded-full"
                    : ""
                }`}
                onClick={() => handleClick("Apps")}
              >
                Apps
              </button>
              <button
                className={`bg-white-400 px-6 py-2 rounded-full text-3xl font-semibold border ${
                  category === "Marketing"
                    ? "bg-black text-white px-4 py-2 rounded-full"
                    : ""
                }`}
                onClick={() => handleClick("Marketing")}
              >
                Marketing
              </button>
              <button
                className={`bg-white-400 px-6 py-2 rounded-full text-3xl font-semibold border ${
                  category === "Ecommerce"
                    ? "bg-black text-white px-4 py-2 rounded-full"
                    : ""
                }`}
                onClick={() => handleClick("Ecommerce")}
              >
                E Commerce
              </button>
            </div>
            <p className="mt-20 text-lg text-gray-500">{description[0]}</p>
          </div>
          <div className=" p-4 w-[25%] flex justify-center">
            <ul>
              {light.slice(0, 3).map((app: string) => {
                return (
                  <li className="p-2 flex justify-center">
                    <img
                      className=" h-[100px] "
                      src={app}
                      alt="perplexity"
                    />
                  </li>
                );
              })}
              <li>
                {" "}
                <p className="mt-4 text-lg text-gray-500">{description[1]}</p>
              </li>
            </ul>
          </div>
          <div className="border-l p-4 w-[25%]">
            <ul>
              {light.slice(3).map((app: string) => {
                return (
                  <li className="p-2 flex justify-center">
                    <img
                      className="w-[100px] h-[100px] "
                      src={app}
                      alt="perplexity"
                    />
                  </li>
                );
              })}
              <li>
                {" "}
                <p className="mt-4 text-lg text-gray-500">{description[2]}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
