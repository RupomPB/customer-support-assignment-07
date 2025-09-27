
1. What is JSX, and why is it used?

Ans: JSX stands for JavaScript XML.
It’s a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript.

2. What is the difference between State and Props?

Ans: State

 State is a local data storage that is private to a component.

Holds data that can change over time and affects the component rendering.

Mutability: State can be changed inside the component using hooks like useState.

Only accessible within the component where it is defined (unless passed down).

Props

are read-only values passed from a parent component to a child component.
Used to pass data and functions to child components.


 Props cannot be changed by the child component. They are immutable.


3. What is the useState hook, and how does it work?

Ans: useState hook  is a React hook that adds state to functional components and

returns a state variable and a function to update it

Updating state triggers a re-render.

4. How can you share state between components in React?

Ans: Pass Props  state down from parent to child.

 Move state to a common parent component so multiple children can access it using Lifting State Up



5. How is event handling done in React?

Ans: React events are handled using camelCase syntax.

Event handlers are functions passed to components.

can pass parameters by using an arrow function.