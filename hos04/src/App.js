// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(s => s + 1)
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <h1>Score: {score}</h1>
    </>
  )
}



// export default function Form() {
//   const [to, setTo] = useState('Alice');
//   const [message, setMessage] = useState('Hello');

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert('You said ${message} to ${to}');
//     }, 5000);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:{' '}
//         <select
//           value={to}
//           onChange={e => setTo(e.target.value)}>
//           <option value="Alice">Alice</option>
//           <option value="Bob">Bob</option>
//         </select>
//       </label>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }



// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
