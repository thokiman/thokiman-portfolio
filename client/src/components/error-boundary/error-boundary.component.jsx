import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageTitle,
  ErrorImageDescription,
} from "./error-boundary.styles";
class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    //process the error
    return { hasErrored: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error);
  }
  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/FOeYt4E.png" />
          <ErrorImageTitle>This Page is Buried in the Sand </ErrorImageTitle>
          <ErrorImageDescription>
            You have never seen an ostrich head. Whenever you’re around it seems
            ostriches are avoiding your gaze. You came on this trip specifically
            to see an ostrich head, but here is this ostrich right in front of
            you, head invisible. You may never see an ostrich head.
          </ErrorImageDescription>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
