import App from "@/app/page";
import { RootLayoutProvider } from "@/common/provider";
import { render } from "@/test/setup/library";

describe("App", () => {
  it("should render app", () => {
    const app = render(
      <RootLayoutProvider>
        <App />
      </RootLayoutProvider>,
    ).baseElement;

    expect(app).toBeInTheDocument();
  });
});
