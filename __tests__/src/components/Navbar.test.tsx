import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Navbar } from "@/components/Navbar";

describe("Navbar", () => {
  it("Should render title", () => {
    const { getByText, getByRole } = render(
      <Navbar />
    );

    expect(getByRole("navigation")).toBeInTheDocument();

    const spookText = getByText("SPÖÖK");
    expect(spookText).toBeInTheDocument();

    const tubeText = getByText("TUBE");
    expect(tubeText).toBeInTheDocument();
  });

  it("Should display disclaimer tooltip", async () => {
    const { findByRole, getByLabelText } = render(
      <Navbar />
    );

    const icon = getByLabelText("disclaimer");

    userEvent.hover(icon);

    const tooltip = await findByRole("tooltip");
    expect(tooltip).toHaveTextContent("We are not associated in any way with the developers from \"Content Warning\". We just love their game ❤️");
  });
});