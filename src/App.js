import './App.css';
import {NavBar} from './components/NavBar';
import {Contacts} from './components/Contacts/Contacts';
import {useState} from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <NavBar />
      <Contacts contacts={contacts} isloading={isloading} />
      <p>testing</p>
    </div>
  );
};

export default App;
