import React, { useState, useEffect } from "react";
import Link from "./Link";

const MainNav = (props) => {
  return (
    <div class="flex flex-col items-center w-16 pb-4 overflow-auto border-r border-gray-300 dark:border-gray-800 dark:text-gray-500">
      <Link
        {...props}
        link_config={{
          to: "/",
          title: "Home",
          type: "home",
        }}
      />
      <Link
        {...props}
        link_config={{
          to: "/files",
          title: "Files",
          type: "files",
        }}
      />
      <Link
        {...props}
        link_config={{
          to: "/analytics",
          title: "Analytics",
          type: "analytics",
        }}
      />
      <Link
        {...props}
        link_config={{
          to: "/documents",
          title: "Documents",
          type: "documents",
        }}
      />{" "}
      <Link
        {...props}
        link_config={{
          to: "/settings",
          title: "Settings",
          type: "settings",
        }}
      />
      <Link
        {...props}
        link_config={{
          to: "/account",
          title: "Account",
          type: "account",
        }}
      />
    </div>
  );
};

export default MainNav;
