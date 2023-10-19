import React, { Component } from 'react';
import '../style.css';

class CustomErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="customContainer">
            <i className="customPage">Sorry</i>
            <h1 className="customPage"> an error just occured. </h1>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default CustomErrorBoundary;
