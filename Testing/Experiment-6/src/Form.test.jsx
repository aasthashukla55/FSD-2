import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

// Helper to render components that use 'Link' or 'useLocation'
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("User Application Tests", () => {

  describe("Home Page - Registration Form", () => {
    it("renders all registration fields", () => {
      renderWithRouter(<Home />);
      expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
      expect(screen.getByRole("checkbox", { name: /remember me/i })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /register now/i })).toBeInTheDocument();
    });

    it("shows error message for invalid email", () => {
      renderWithRouter(<Home />);
      const emailInput = screen.getByLabelText(/Email Address/i);
      fireEvent.change(emailInput, { target: { value: "invalidemail" } });
      expect(screen.getByText(/Email must contain @/i)).toBeInTheDocument();
    });

    it("shows error message for short password", () => {
      renderWithRouter(<Home />);
      const passwordInput = screen.getByLabelText(/Password/i);
      fireEvent.change(passwordInput, { target: { value: "123" } });
      expect(screen.getByText(/Password must be at least 6 characters/i)).toBeInTheDocument();
    });

    it("opens success dialog on valid form submission", async () => {
      renderWithRouter(<Home />);
      
      fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: "John Doe" } });
      fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "john@test.com" } });
      fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: "password123" } });
      fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: "25" } });
      fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: "1999-01-01" } });
      
      // Fix for MUI Select: Target the hidden input by name
      const genderInput = document.querySelector('input[name="gender"]');
      fireEvent.change(genderInput, { target: { value: "male" } });

      const submitBtn = screen.getByRole("button", { name: /register now/i });
      fireEvent.click(submitBtn);

      // Check if Dialog appears
      expect(await screen.findByText(/Success!/i)).toBeInTheDocument();
      expect(screen.getByText(/Your form has been submitted successfully/i)).toBeInTheDocument();
    });
  });

  describe("About Page", () => {
    it("updates text area and handles save", () => {
      const consoleSpy = vi.spyOn(console, 'log');
      render(<About />);
      
      const textArea = screen.getByLabelText(/Bio \/ Description/i);
      fireEvent.change(textArea, { target: { value: "This is my bio" } });
      
      const saveBtn = screen.getByRole("button", { name: /save profile/i });
      fireEvent.click(saveBtn);

      expect(consoleSpy).toHaveBeenCalledWith("Bio Saved:", "This is my bio");
    });
  });

  describe("Dashboard Page", () => {
    it("renders contact information correctly", () => {
      render(<Dashboard />);
      expect(screen.getByText("Contact Information")).toBeInTheDocument();
      expect(screen.getByText("support@experiment5.com")).toBeInTheDocument();
      expect(screen.getByText("+91 98765 43210")).toBeInTheDocument();
    });

    it("updates rating display when star is clicked", () => {
      render(<Dashboard />);
      
      // Click the 4th star
      const star4 = screen.getByLabelText(/4 Stars/i);
      fireEvent.click(star4);

      // Fix: Specifically target the H6 heading to avoid duplicate text error
      expect(screen.getByRole('heading', { name: "4 Stars" })).toBeInTheDocument();
    });
  });

  describe("Navbar Navigation", () => {
    it("renders navigation links", () => {
      renderWithRouter(<Navbar />);
      expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute("href", "/");
      expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "/about");
      expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute("href", "/dashboard");
    });
  });
});