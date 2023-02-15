import React, { useState, useEffect } from 'react';
import Contacts from './components/contacts';
import People from './components/People';
import Persons from './components/Persons';


function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
          setContacts(data);
      })
      .catch(console.error)
  }, []);

  return (
      <div>
        <Contacts contacts={contacts} />
        <Persons/>
        <People/>
      </div>
  );
}

export default App;
