"use client";

import { Component, ReactNode } from "react";
import * as S from "./ErrorBoundary.styles";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <S.ErrorContainer>
          <S.ErrorTitle>Oops! Something went wrong</S.ErrorTitle>
          <S.ErrorMessage>
            We encountered an unexpected error. Please try reloading the page.
          </S.ErrorMessage>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <S.ErrorMessage
              style={{ fontSize: "14px", fontFamily: "monospace" }}
            >
              {this.state.error.toString()}
            </S.ErrorMessage>
          )}
          <S.ReloadButton onClick={() => window.location.reload()}>
            Reload Page
          </S.ReloadButton>
        </S.ErrorContainer>
      );
    }

    return this.props.children;
  }
}
