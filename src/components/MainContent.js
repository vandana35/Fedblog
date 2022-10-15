import React from 'react';

export default function MainContent() {
  return (
    <div className='main-container'>
        <div className='content'>
         <h2 style={{marginLeft:"5px"}}>Class Components</h2>
         <p lang='eng'>
</p><br />
<div className='rectangle' id="rectangle">
<p>
<h2>ReactJS Class Based Components</h2><br/><br/>
React class based components are the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application). All class based components are child classes for the Component class of ReactJS. 
 

Example: Program to demonstrate the creation of class-based components. Create a React app and edit the App.js as:
<br/>
Once a component is declared, it can be used in other components. Program to demonstrate the use of class based components in other components. 

Example: Open the App.js file and replace the code with the below code.
<br/><br/>
<h2>Example</h2><br/>
import React from "react";<br/>
import React from "react";<br/>
 
class Sample extends React.Component <br/>
  render() <br/>
    return A Computer Science Portal For Geeks;<br/>
  
 
class App extends React.Component <br/>
  render() <br/>
    return Sample;<br/><br/>
    The main feature of class-based components that distinguished them from functional components is that they have access to a state which dictates the current behavior and appearance of the component (Later, with React Hooks introduced in version 16.8, we are able to declare a stateful component without declaring a class). This state can be modified by calling the setState() function. One or more variables, arrays, or 
    objects defined as part of the state can be modified at a time with the setState() function.
 <br/>
 Data is passed to other components with the help of props. Props work similarly for all components in ReactJS be they class based or functional. Props are always passed down from the
  parent component to the child component. ReactJS does not allow a component to modify 
  its own props as a rule.<br/><br/> The only way to modify the props is to change the props being passed from the 
  parent component to the child component. This is generally done by passing a reference to a function in the parent 
  component, which changes the props being passed to the child component.<br/><br/>
  Class-based components have access to the lifecycle functions like componentWillMount(), componentDidMount(),
  componentWillReceiveProps(),componentWillUpdate(), shouldComponentUpdate(),render() and componentWillUnmount();. 
  These lifecycle functions are called at different stages of the lifecycle and are used for a variety of purposes like 
  changing the state or doing some work (like fetching data from an external API). They are also referred to as lifecycle hooks. 
  <br/>
  Class-based components are slightly slower than their functional counterparts. The difference is very small and is
   almost negligible for smaller web apps – though the performance difference increases when the number of components in 
   the app increases. Moreover,
   class-based components involve a lot more coding on the programmer’s part, making them slightly more inefficient to use.
 <br/><br/>
 <h2>Example</h2>
 <br/>
 import React from "react";
 
class App extends React.Component &#123;<br/>
  constructor(props) &#123;<br/>
    super(props);<br/>
    this.state = &#123;text: "Welcome!" &#125;;<br/>
    &#125;<br/>
 
  componentWillMount() &#123;<br/>
    this.setState(&#123;<br/>
      text: "GeeksforGeeks",<br/>
      &#125;);<br/>
      &#125;<br/>
 
  render() &#123;<br/>
   return( &#123;this.state.text&#125;)<br/>
    &#125;<br/>
    &#125;<br/>
 
export default App;
</p>
</div>
       </div>
       </div>
  )
  }
