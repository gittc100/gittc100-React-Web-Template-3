import React, { useContext, useState } from "react";
import GlobalContext from "./context/GlobalContext";
import MainNav from "./components/navigation_components/MainNav";
import SubNav from "./components/navigation_components/SubNav";
import TopNav from "./components/navigation_components/TopNav";
import ThemeToggle from "./components/theme_components/ThemeToggle";
// require("dotenv").config();

const App = () => {
  const [state, setState] = useState({ page_title: [] });
  return (
    <div class="flex w-screen h-screen text-gray-700 dark:text-gray-400 dark:bg-gray-900">
      <MainNav state={state} setState={setState} />

      <SubNav />

      <div class="flex flex-col flex-grow">
        <TopNav state={state} setState={setState} />

        <div class="flex-grow p-6 overflow-auto bg-gray-800">
          <div class="grid grid-cols-3 gap-6">
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-3 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-3 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-1 bg-gray-700"></div>
            <div class="h-24 col-span-2 bg-gray-700"></div>
            <div class="h-24 col-span-3 bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
