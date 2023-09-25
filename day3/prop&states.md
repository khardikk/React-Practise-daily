## Props (Properties):

Props are a way to pass data from a parent component to a child component in React. They are read-only and help you create reusable and configurable components.

Here's a simple example:

```
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = 'Hello from Parent!';

  return (
    <div>
      <ChildComponent greeting={message} />
    </div>
  );
}

export default ParentComponent;
```
```
// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>{props.greeting}</p>
    </div>
  );
}

export default ChildComponent;
```

In this example, ParentComponent passes a prop called greeting to ChildComponent. ChildComponent receives and displays the value of greeting.

## State:
State is used to manage data that can change within a component and trigger re-renders. Unlike props, state is mutable and can be changed using the setState method.

```
import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;

```

In this example, we have a Counter component that manages a count using state. The incrementCount method updates the state when the "Increment" button is clicked, causing a re-render of the component.

To summarize:

Props: Used for passing data from parent to child components. Props are immutable (read-only) in the child component.

State: Used to manage data that can change within a component. State is mutable and can be modified using setState. State updates trigger component re-renders.

These concepts are fundamental to building React applications, and understanding how to use props and state effectively will enable you to create dynamic and interactive user interfaces.
