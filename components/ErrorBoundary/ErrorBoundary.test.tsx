import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorBoundary from "./ErrorBoundary";

const ThrowError = ({ shouldThrow }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error("Test error");
  }
  return <div>No error</div>;
};

describe("ErrorBoundary", () => {
  // Suppress console.error for cleaner test output
  const originalError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalError;
  });

  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <div>Test Content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("catches errors and displays fallback UI", () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/reload page/i)).toBeInTheDocument();
  });

  it("renders custom fallback if provided", () => {
    render(
      <ErrorBoundary fallback={<div>Custom Error Message</div>}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Custom Error Message")).toBeInTheDocument();
  });

  it("shows error details in development mode", () => {
    const originalEnv = process.env;

    // Replace the entire process.env object
    process.env = { ...originalEnv, NODE_ENV: "development" };

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Test error/i)).toBeInTheDocument();

    // Restore original
    process.env = originalEnv;
  });

  it("logs error to console", () => {
    const consoleErrorSpy = jest.spyOn(console, "error");

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});
