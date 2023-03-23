import React from "react";

const Header = () => {
  return (
    <div className="flex md:flex-row justify-between items-center bg-[#6666c4] text-white py-5 px-10">
      <div className="flex items-center space-x-5">
        <div>
          <img
            src="https://docs.gitlab.com/assets/images/gitlab-logo-header.svg"
            alt="GitLab Logo"
          />
        </div>
        <div className="hidden md:block">About Gitlab pricing</div>
        <div className="hidden md:block">Pricing</div>
        <div className="hidden md:block">Talk to an expert</div>
        <div className="hidden md:ml-5">
          <input type="text" className="rounded-md" />
        </div>
      </div>
      <div className="flex items-center space-x-5 md:mt-0">
        <span className="hidden md:block">Help</span>
        <button className="bg-white text-black p-1 rounded-sm">Register</button>
        <button className="hidden md:block">Signin</button>
        <button className="md:hidden">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 18H3v-2h18v2zM21 13H3v-2h18v2zM3 8h18V6H3v2z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
