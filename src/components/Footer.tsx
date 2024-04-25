import React from "react";
import { MoonOutlined, SunOutlined, DesktopOutlined } from "@ant-design/icons";
const Footer: React.FC = () => {
  return (
    <div className="border p-10 flex justify-evenly mt-10">
      <div className="flex flex-col  text-left ">
        <div className="flex gap-4 items-center ">
          <svg
            data-testid="geist-icon"
            height="16"
            stroke-linejoin="round"
            viewBox="0 0 16 16"
            width="16"
            aria-label="Vercel logo"
            style={{
              width: "23px",
              height: "25px",
              color: "var(--ds-gray-1000)",
            }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 1L16 15H0L8 1Z"
              fill="currentColor"
            ></path>
          </svg>
          <span>©2024</span>
        </div>

        <p className="text-blue-500 mt-4 text-sm font-medium">
          All Systems normal.
        </p>
        <div className="flex gap-2 text-gray-400 items-center mt-20">
          <a
            aria-label="GitHub"
            href="https://github.com/vercel"
            rel="noopener"
            target="_blank"
          >
            <svg aria-label="github" height="19" viewBox="0 0 14 14" width="19">
              <path
                d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </svg>
          </a>
          <a
            aria-label="X formerly known as Twitter"
            href="https://x.com/vercel"
            rel="noopener"
            target="_blank"
          >
            <svg
              data-testid="geist-icon"
              height="16"
              stroke-linejoin="round"
              viewBox="0 0 16 16"
              width="16"
              aria-label=""
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="text-lg">Products</h1>
        <div className="flex mt-3 gap-20 text-gray-500 cursor-pointer">
          <ul>
            <li className="py-1">DX Platform</li>
            <li className="py-1"> Infrastructure</li>
            <li className="py-1">Storage</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Changelog</li>
          </ul>
          <ul>
            <li className="py-1">Next.js</li>
            <li className="py-1"> V0</li>
            <li className="py-1">Turbo</li>
            <li className="py-1">Enterprise</li>
            <li className="py-1">CLI & API</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg">Resources</h1>
        <div className="flex mt-3 gap-20 text-gray-500 cursor-pointer">
          <ul>
            <li className="py-1">Docs</li>
            <li className="py-1"> Pricing</li>
            <li className="py-1">Customers</li>
            <li className="py-1">Integrations</li>
            <li className="py-1">Templates</li>
          </ul>
          <ul>
            <li className="py-1">Experts</li>
            <li className="py-1"> Guides</li>
            <li className="py-1">Help</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg">Company</h1>
        <div className="flex mt-3 gap-20 text-gray-500 cursor-pointer">
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Carrers</li>
            <li className="py-1">Next.js Conf</li>
            <li className="py-1">Partners</li>
            <li className="py-1">Privacy Policy</li>
          </ul>
          <ul>
            <li className="py-1">Blog</li>
            <li className="py-1"> Contact Us</li>
            <li className="py-1">Open Source</li>
            <li className="py-1">Security</li>
            <li className="py-1">Legal</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-lg">Prefrences</h1>
        <ul className="flex gap-4 mt-6 cursor-pointer">
          <li>
            <MoonOutlined />
          </li>
          <li>
            <SunOutlined />
          </li>
          <li>
            <DesktopOutlined />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
