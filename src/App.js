import React from 'react';

//function App() {
//  return <h1>Hello,world!</h1>;
//}

//class App extends Component {
//  render(){
//    return (
//      <div>
//        <label htmlFor="bar"> bar</label>
//        <input type="text" onChange={() => {console.log("I am clicked")}} />;
//      </div>
//    )
//  }
//}

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
