import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasEror) {
            return <h1 className='tc pa4'>Sorry! Something has gone terribly wrong!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;