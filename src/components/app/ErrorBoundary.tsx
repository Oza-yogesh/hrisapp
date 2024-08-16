import { Component, ErrorInfo, ReactNode } from "react";
import ErrorFallback from "./ErrorFallback";
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "../interfaces/Interfaces";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): { hasError: boolean } {
    return { hasError: true };
  }
   
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("Error caught by error boundary:", error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
