import { render } from "@testing-library/react";

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
});