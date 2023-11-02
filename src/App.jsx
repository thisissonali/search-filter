import React , { useState } from 'react'
import './App.css'

function App() {
  const [searchText, setSearchText] = useState('');
  const people = [
    {
      id: crypto.randomUUID(), name : "Emily Johnson"}, { id : crypto.randomUUID() , name : "Daniel Miller"}, { id : crypto.randomUUID() , name : "Sophia Brown"}, { id : crypto.randomUUID() , name : "Liam Wilson"}, { id : crypto.randomUUID() , name : "Olivia Davis"}, { id : crypto.randomUUID() , name : "Noah Martinez"}, { id : crypto.randomUUID() , name : "Ava Anderson"}, { id : crypto.randomUUID() , name : "William Thompson"}, { id : crypto.randomUUID() , name : "Mia Harris"}, { id : crypto.randomUUID() , name : "James Taylor"}, { id : crypto.randomUUID() , name : "Isabella Lee"}, { id : crypto.randomUUID() , name : "Benjamin Clark"}, { id : crypto.randomUUID() , name : "Charlotte Turner"}, { id : crypto.randomUUID() , name : "Henry Mitchell"}, { id : crypto.randomUUID() , name : "Amelia White"}, { id : crypto.randomUUID() , name : "Samuel Walker"}, { id : crypto.randomUUID() , name : "Harper Scott"}, { id : crypto.randomUUID() , name : "Elijah Green"}, { id : crypto.randomUUID() , name : "Grace Hall"}, { id : crypto.randomUUID() , name : "Alexander Carter"}
  ]
  return (
    <div className="container">
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder='Search...'
      />
       <div className='listt'>
        {
          people.filter((person) => {
            if (searchText == "") return person.name;
            else {
              if (person.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) return person.name;
            }
          }).map((person) => {
            return <div key={person.id}>{ person.name }</div>
          })
          
        }
      </div>
    </div>
  );
}

export default App
