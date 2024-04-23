import React from "react";

import { DisclaimerTooltip } from "@/components/DisclaimerTooltip";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-1 bg-slate-50">
      <div className="flex items-center gap-2.5">
        <p className="text-2xl font-semibold text-slate-950 tracking-wider">
          SPÖÖK
        </p>
        <p className="text-2xl font-semibold bg-slate-950 text-slate-50 px-3.5 py-2 rounded-md">
          TUBE
        </p>
      </div>

      <DisclaimerTooltip />
    </nav>
  );
};

export {
  Navbar
};