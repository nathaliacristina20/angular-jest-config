import { AppComponent } from "./app.component";
import { render, screen } from "@testing-library/angular";

describe("AppComponent", () => {
  it("should do something true", async () => {
    await render(AppComponent, {
      componentProperties: { name: "cristina" },
    });

    expect(screen.getByTestId("count")).toBeTruthy();
    expect(screen.getByText(/cristina/i).textContent).toEqual("cristina");
  });

  it("should do something false", async () => {
    await render(AppComponent, {
      componentProperties: { name: "cristinaa" },
    });

    expect(screen.queryByText("cristinaa")).not.toBeInTheDocument();
    expect(screen.queryByText("cristina")).not.toBeInTheDocument();
  });
});
