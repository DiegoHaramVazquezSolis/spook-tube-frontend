import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import { Navbar } from "@/components/Navbar";

describe("Navbar", () => {
  it("Should render title", () => {
    const { getByText, getByRole } = render(
      <Navbar />
    );

    expect(getByRole("navigation")).toBeInTheDocument();

    const spookText = getByText('SPÖÖK');
    expect(spookText).toBeInTheDocument();

    const tubeText = getByText('TUBE');
    expect(tubeText).toBeInTheDocument();
  });

  it("Should display info tooltip", async () => {
    const { findByText, getByLabelText } = render(
      <Navbar />
    );

    const icon = getByLabelText("information");
    userEvent.hover(icon);

    const tooltipText = await findByText("We are not associated in any way with the developers from \"Content Warning\" (We just love their game ❤️)");
    expect(tooltipText).toBeInTheDocument();
  });
});