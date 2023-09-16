React_Refs facilitate the access of the DOM node whereby a React componenet is created. They enable the coder to access the value of the component with which the ref hook is associated.

React_Portals enable the coder to generate code from a specified DOM node, regardless of the component's location
within App or a similar component which may be generated from another DOM node.

React_Fragments permit the coder to not wrap elements within a div element.

Controlled refers to elements managed via useState, while uncontrolled refers to elements accessed via useRef.

Use_Effect permits the coder to execute code, often an arrow function, in response to a change in the specified dependencies.

These dependencies are flagged via the omission or the use of squared brackets, in which the dependencies are contained.

When no square brackets are included, the Effect is executed at every re-render.

When empty square brackets are included, the Effect is executed once at the initial render.

When square brackets are included which are full, the Effect is executed on initial render and whenever these dependencies change.

To limit re-render cycles, it can be worthwhile to specify an exact dependency by referencing an attribute or prop directly, by using the destructuring alias syntax, the dot notation or square bracket notation.

UseReducer allows the coder to reduce the number of states in use. It does so through use of a useReducer hook, which takes the state name and dispatch function as inputs for the reducer function, as well as an initial state and initial state setting function.

The dispatch function conveys information, typically an object, to the reducer function. The reducer function then computes state on the basis of the object provided, such that the value of the state first declared within the useReducer function may change.

Counter explores the use of Custom Hooks, which compartmentalise React logic, so that it can be included within different functional components. The logic may be customised by use of unique arguments to the function, conditional logic within the function, and the function's return value.

<br><br> Onwards explores Custom Hooks more extensively. It is an application which stores to-do items to a Firebase Realtime Database, outsourcing the logic of fetch requests to a specific custom hook, useHTTP. UseHTTP 
is customisable, taking an object to alter the nature of the request and a function to process the data as parameters. It uses useEffect to update to-do items in real time and the bind method to bake in the text inputted
via a user input form, reducing the necessary number of parameters within useHTTP from two to one. UseHTTP
contains a function, fetchData, which it returns, to avoid the use of a hook within useEffect: it can export 
fetchData.
