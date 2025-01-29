import React from "react";
import { render, screen, fireEvent, act, describe, beforeEach, test, expect } from "@testing-library/react";
import { message } from "antd";
import CreateTimeline from './pages/createTimeline/CreateTimeline'
import {jest} from '@jest/globals'
import 'whatwg-fetch'
//import React from "react";

// Mock de Ant Design message
jest.mock("antd", () => {
  const originalModule = jest.requireActual("antd");
  return {
    ...originalModule,
    message: {
      success: jest.fn(),
      error: jest.fn(),
    },
  };
});

describe("TimeLineForm Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the form correctly", () => {
    render(<CreateTimeline />);
    expect(screen.getByText("Events/Timeline")).toBeInTheDocument();
    expect(screen.getByText("Select a Timeline")).toBeInTheDocument();
    expect(screen.getByText("Event name")).toBeInTheDocument();
    expect(screen.getByText("Select date")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Upload")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("submits the form successfully with valid inputs", async () => {
    render(<CreateTimeline />);

    // Fill out the form
    fireEvent.mouseDown(screen.getByPlaceholderText("Select an option"));
    fireEvent.click(screen.getByText("The Lord of the Rings"));

    fireEvent.change(screen.getByPlaceholderText("Enter some text"), {
      target: { value: "An epic event" },
    });

    const rangePicker = screen.getByPlaceholderText("Start date");
    fireEvent.mouseDown(rangePicker);
    // Assuming the date picker interaction is mocked properly or replaced with an accessible interaction

    fireEvent.change(screen.getByPlaceholderText("Enter some content"), {
      target: { value: "This is the content for the event." },
    });

    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByText("Submit"));
    });

    // Assert success message
    expect(message.success).toHaveBeenCalledWith("Form submitted successfully!");
  });

  test("shows error message when required fields are missing", async () => {
    render(<CreateTimeline />);

    // Submit the form without filling any inputs
    await act(async () => {
      fireEvent.click(screen.getByText("Submit"));
    });

    // Assert error message
    expect(message.error).toHaveBeenCalledWith("Please fill out all required fields!");
  });
});
