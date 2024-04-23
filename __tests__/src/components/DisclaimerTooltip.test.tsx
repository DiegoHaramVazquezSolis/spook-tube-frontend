import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DisclaimerTooltip } from "@/components/DisclaimerTooltip";

describe("DisclaimerTooltip", () => {
  it("Should display disclaimer tooltip", async () => {
    const { findByRole, getByLabelText } = render(
      <DisclaimerTooltip />
    );

    const icon = getByLabelText("disclaimer");

    userEvent.hover(icon);

    const tooltip = await findByRole("tooltip");
    expect(tooltip).toHaveTextContent("We are not associated in any way with the developers from \"Content Warning\". We just love their game ❤️");
  });
});