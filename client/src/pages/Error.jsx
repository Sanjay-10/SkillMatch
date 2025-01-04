import React from "react";
import { useNavigate } from "react-router-dom";
import fail from "../assets/failed.png";
import Bgc from "../components/Bgc";
import Header from "../components/Header";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in boundary:", error, errorInfo);
  }

  handleNavigation = () => {
    this.props.navigate("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="relative flex flex-col items-center justify-between pb-2 px-4 text-center w-full h-full"
          style={{ width: "330px", height: "430px", overflow: "hidden" }}
        >
          <Header />
          <Bgc />
          <div className="w-full flex-1 flex flex-col mt-7 items-center">
            <img src={fail} alt="Error" className="w-16 h-16 mb-4" />
            <h1 className="text-xl font-semibold text-black-900 dark:text-white">
              Oops! Something went wrong.
            </h1>
            <p
              className="text-black-900 dark:text-white mb-6"
              style={{ fontSize: "15px" }}
            >
              Don’t worry, we’re here to help. You can return to the homepage
              and try again.
            </p>
            <button
              onClick={this.handleNavigation}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const ErrorBoundaryWithNavigation = (props) => {
  const navigate = useNavigate();
  return <ErrorBoundary {...props} navigate={navigate} />;
};

export default ErrorBoundaryWithNavigation;
