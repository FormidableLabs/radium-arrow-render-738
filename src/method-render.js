import Radium from 'radium';
import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';

class Foo extends Component {
  render() {
    const styles = getStyles(this.props, this.state);
    return (<div style={ styles.foo } />);
  };
};
const getStyles = (props, state) => ({ foo: { color: 'red' } });

// First render raw component.
const foo = renderToString(<Foo />);
console.log("foo", foo);

// Now, wrap with Radium and try again.
const Wrapped = Radium(Foo);
const wrapped = renderToString(<Wrapped />);
console.log("wrapped", wrapped);
