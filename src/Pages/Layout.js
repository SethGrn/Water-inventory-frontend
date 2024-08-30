import React from "react";
import Menu from "../Menu.js";
import Routing from "../Routing.js";

function Layout() {
  return (
    <div>
      <Menu />
      <div>
        <Routing />
      </div>
    </div>
  );
}

export default Layout;
