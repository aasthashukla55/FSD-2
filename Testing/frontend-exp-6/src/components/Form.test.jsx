import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Formc from "./Form";
import "@testing-library/jest-dom";
import { Checkbox } from "@mui/material";

describe("Login Form Component", () => {

  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("RENDERS email and password fields", () => {
    render(<Formc />);
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

it("ShOWS ERROR for no email",()=>{
  render(<Formc />);
  const email = screen.getByLabelText(/email/i);
  fireEvent.change(email,{target: {value: "abc"}});

  expect(screen.getByText("Please enter valid email")).toBeInTheDocument();
  
})

  it("SHOWS ERROR for short password", () => {
    render(<Formc />);
    const uname = screen.getByLabelText(/username/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(uname, {target :{value: "test"}})
    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "123" } });

    fireEvent.click(button);

    expect(screen.getByText("Password length must be greater than 8")).toBeInTheDocument();
  });

  it("SUBMITS successfully with valid input", () => {
    render(<Formc />);
    const uname = screen.getByLabelText(/username/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const button = screen.getByRole("button", { name: /submit/i });
    const check = screen.getByRole("checkbox");

    fireEvent.change(uname,{target:{value: "test1"}});
    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "12345678" } });
    fireEvent.click(check);

    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalledWith(`Username: test1\n Email: test@test.com`);
  });

});