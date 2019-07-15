import React, { Component as ReactComponent } from 'react';

const AsyncComponent = store => importComponent => (
  class extends ReactComponent {
    constructor(props) {
      super(props);

      this.state = { Component: null };
    }

    componentDidMount() {
      importComponent().then((component) => {
        let Component = component.default;

        if (typeof store !== 'undefined') {
          Component(store);
        }

        this.setState({ Component });
      });
    }

    render() {
      const { Component } = this.state;

      return Component ? <Component {...this.props} /> : null;
    }
  }
);

export default AsyncComponent;
