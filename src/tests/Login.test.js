import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "../Components/Login";

describe("change email input", () => {
  it("correctly updates on change", () => {
    const { queryByPlaceholderText } = render(
      <Router>
        <Login />
      </Router>
    );

    const emailInput = queryByPlaceholderText("example@gmail.com");
    fireEvent.change(emailInput, { target: { value: "sergei@gmail.com" } });

    expect(emailInput.value).toBe("sergei@gmail.com");
  }),
    it("incorrectly updates on change", () => {
      const { queryByPlaceholderText } = render(
        <Router>
          <Login />
        </Router>
      );

      const emailInput = queryByPlaceholderText("example@gmail.com");
      fireEvent.change(emailInput, { target: { value: "sergei" } });

      expect(emailInput.value).not.toBe("sergei@gmail.com");
    });
});

describe("Page check", () => {
  it("is sign in page", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    expect(document.querySelector("h1").textContent).toBe("Вход");
  });
});
