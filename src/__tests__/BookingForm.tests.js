import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "../Booking/BookingForm";
import { ChakraProvider } from "@chakra-ui/react";

// Helper function to render component with providers
const renderWithProviders = (ui) => {
  return render(
    <ChakraProvider>
      <MemoryRouter><BookingForm /></MemoryRouter>
    </ChakraProvider>
  );
};

describe("BookingForm", () => {
  test("renders step 1 correctly", () => {
    renderWithProviders(<BookingForm />);
    expect(screen.getByLabelText(/Select a Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
  });

  test("validates step 1 before proceeding", async () => {
    renderWithProviders(<BookingForm />);

    fireEvent.click(screen.getByText(/Next/i));
    await waitFor(() => {
      expect(screen.getByText(/Required/i)).toBeInTheDocument();
    });
  });

  test("proceeds to step 2 when valid input is provided", async () => {
    renderWithProviders(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "2" } });
    fireEvent.click(screen.getByText(/Next/i));

    await waitFor(() => {
      expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    });
  });

  test("validates name and email fields on step 2", async () => {
    renderWithProviders(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "2" } });
    fireEvent.click(screen.getByText(/Next/i));

    await waitFor(() => {
      expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    });

    fireEvent.blur(screen.getByLabelText(/Name/i));
    fireEvent.blur(screen.getByLabelText(/Email/i));

    await waitFor(() => {
      expect(screen.getByText(/Required/i)).toBeInTheDocument();
    });
  });

  test("confirms booking and displays summary", async () => {
    renderWithProviders(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "2" } });
    fireEvent.click(screen.getByText(/Next/i));

    await waitFor(() => screen.getByLabelText(/Name/i));
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
    fireEvent.click(screen.getByText(/Confirm Booking/i));

    await waitFor(() => {
      expect(screen.getByText(/Booking Confirmed!/i)).toBeInTheDocument();
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    });
  });

  test("returns to home when clicking back button", async () => {
    renderWithProviders(<BookingForm />);

    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "2" } });
    fireEvent.click(screen.getByText(/Next/i));

    await waitFor(() => screen.getByLabelText(/Name/i));
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
    fireEvent.click(screen.getByText(/Confirm Booking/i));

    await waitFor(() => screen.getByText(/Booking Confirmed!/i));
    fireEvent.click(screen.getByText(/Back to Home/i));
  });
});
