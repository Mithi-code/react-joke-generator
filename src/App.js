import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) =>{
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='App'>
      <h1>The joke generators</h1>
      <h2>{joke}</h2>
      <form>
       
        {/* <input placeholder='first name' value={firstName} onChange={e => setFirstName(e.target.value)}    before useref/>
        <input placeholder='last name' value={lastName} onChange={e => setLastName(e.target.value)}/> */}
        <input placeholder='first name' ref={firstNameRef}/>
        <input placeholder='last name' ref={lastNameRef}/>
        <button onClick={generateJoke}>Click to generate</button>
        
      </form>
      <button onClick={refreshPage}>Click for new Joke</button>
    
    </div>
  );
}

export default App;
