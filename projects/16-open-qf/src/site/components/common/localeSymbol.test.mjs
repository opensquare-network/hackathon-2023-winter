import { render, screen } from "@testing-library/react";
import LocaleSymbol from "./localeSymbol";
import { describe, expect, test } from "vitest";

describe("localeSymbol", () => {
  test("base", () => {
    render(<LocaleSymbol value="1000000000000" />);
    expect(screen.getByRole("heading")).toHaveTextContent("100 DOT");
  });

  test.skip("decimal places 0", () => {
    expect(LocaleSymbol({ value: "76819568407885" })).toBe("7,682 DOT");
  });

  test.skip("0", () => {
    expect(LocaleSymbol({ value: "0" })).toBe("0 DOT");
  });

  test.skip("NaN", () => {
    expect(LocaleSymbol({ value: null })).toBe("NaN DOT");
    expect(LocaleSymbol({ value: undefined })).toBe("NaN DOT");
  });
});
