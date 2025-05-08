import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Results from "./Results";

describe("Results", () => {
  it("should render a loading state", () => {
    render(<Results items={[]} isLoading={true} hasError={false} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should render an error state", () => {
    render(<Results items={[]} isLoading={false} hasError={true} />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("should render a no results state", () => {
    render(<Results items={[]} isLoading={false} hasError={false} />);

    expect(screen.getByText("No results")).toBeInTheDocument();
  });

  it("should render the results", () => {
    const items = [
      {
        id: "1",
        title: "Item #1",
        description: "Description 1",
        isApproved: true,
      },
      {
        id: "2",
        title: "Item #2",
        description: "Description 2",
        isApproved: false,
      },
      {
        id: "3",
        title: "Item #3",
        description: "Description 3",
        isApproved: false,
      },
    ];
    render(<Results items={items} isLoading={false} hasError={false} />);

    expect(screen.getByText("Item #1")).toBeInTheDocument();
    expect(screen.getByText("Item #2")).toBeInTheDocument();
    expect(screen.getByText("Item #3")).toBeInTheDocument();
  });
});
