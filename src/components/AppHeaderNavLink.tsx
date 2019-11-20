import React from "react";
import "./AppHeaderNavLink.tsx";
const AppHeaderNavLink: React.FC<NavLink> = React.memo(({ label }) => (
  <span className="nav-link">{label}</span>
));
// define a Navigation Link type for our links
export type NavLink = {
    label: string;
    route: string;
  };
export default AppHeaderNavLink;