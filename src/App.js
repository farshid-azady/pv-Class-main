import './App.css';
import {NavBar} from './components/NavBar';
import AddContact from './components/Contacts/AddContact';
import {Contacts} from './components/Contacts/Contacts';
import ViewContact from './components/Contacts/ViewContact';
import EditContact from './components/Contacts/EditContact';

import {useState,useEffect} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import axios from 'axios';
import {getContacts, getGroups} from './services/ContactServices';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const[groups,setGroups]=useState([])

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true);
        const {data:contactsData} =await getContacts();
        const {data:groupsData} =await getGroups();
        setContacts(contactsData);
        setGroups(groupsData);
        setIsLoading(false);
       
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setIsLoading(false);
      }
    };
    fetchContacts();
  }, []);
      
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate  to="/contacts" />} />
        <Route path="/contacts" element={<Contacts contacts={contacts} isloading={isloading} />} />
        <Route path="/contacts/add" element={<AddContact isloading={isloading}  />} />
        <Route path="/contacts/:id" element={<ViewContact />} />
        <Route path="/contacts/edit/:id" element={<EditContact />} />
        
      </Routes>
      
      <p>testing</p>
    </div>
  );
};

export default App;
