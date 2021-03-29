import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const localStorage = window.localStorage;
  const [switchPosition, setSwitchPosition] = useState(0);

  const changeTheme = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setSwitchPosition(0);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setSwitchPosition(1);
    }
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setSwitchPosition(1);
    } else {
      document.documentElement.classList.remove("dark");
      setSwitchPosition(0);
    }
  }, []);

  return (
    <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input
        checked={switchPosition}
        type="checkbox"
        name="toggle"
        id="toggle"
        class={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${
			switchPosition === 1 ? "border-blue-400 right-0" : ""
		  }`}
        onClick={() => changeTheme()}
      />
      <label
        for="toggle"
        class={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${
          switchPosition === 1 ? "bg-blue-400" : ""
        }`}
      ></label>
    </div>
  );
};

export default ThemeToggle;
