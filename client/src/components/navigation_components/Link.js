import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SVG from "../general_components/SVG";

const Link = (props) => {
  const [active, setActive] = useState(false);
  const { to, title, type } = props.link_config;
  const { state, setState } = props;

  return (
    <NavLink
      class={`flex items-center justify-center flex-shrink-0 w-10 h-10 ${
        type === "account" ? "mt-auto" : "mt-4"
      } rounded hover:bg-gray-300 dark:hover:bg-gray-800`}
      exact={true}
      to={to}
      title={title}
      isActive={(match, location) => {
        if (match) {
          setActive(true);
          if (state.page_title[0] !== title) {
            setState({ ...state, page_title: [title] });
          }
        } else {
          setActive(false);
        }
      }}
    >
      <SVG {...props} link_config={{ ...props.link_config, active }} />
    </NavLink>
  );
};

export default Link;
