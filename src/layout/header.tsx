import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between align-middle bg-violet-700 text-white py-5 px-10">
      <div className="flex space-x-5">
        <div>
          <img
            src="https://docs.gitlab.com/assets/images/gitlab-logo-header.svg"
            alt="GitLab Logo"
          />
        </div>
        <div>About Gitlab pricing</div>
        <div>Pricing</div>
        <div>Talk to an expert</div>
        <input type="text" className="rounded-md" />
      </div>
      <div className="flex space-x-5">
        <span>Help</span>
        <button className="bg-white text-black p-1 rounded-sm">Register</button>
        <button>Signin</button>
      </div>
    </div>
  );
};

export default Header;
