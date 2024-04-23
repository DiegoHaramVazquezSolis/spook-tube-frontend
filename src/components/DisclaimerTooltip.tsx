"use client"
import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip } from 'react-tooltip';

const DisclaimerTooltip = () => {
  return (
    <>
    <Info
      className="text-slate-950"
      aria-label="disclaimer"
      data-tooltip-id="disclaimer-tooltip"
      data-tooltip-content={"We are not associated in any way with the developers from \"Content Warning\". We just love their game ❤️"}
      data-tooltip-place="bottom-start"
      data-tooltip-class-name="max-w-48" />

    <Tooltip id="disclaimer-tooltip" />
    </>
  );
};

export default DisclaimerTooltip;