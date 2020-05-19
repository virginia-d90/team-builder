import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css'
import Form from './components/Form'
import TeamMember from './components/TeamMember.js'


const initialMembersList = [
  {
    id: uuid(),
    name: 'Virginia',
    email: 'virginialdport@gmail.com',
    role: 'Server',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [members, setMembers] = useState(initialMembersList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = event => {
    const {name} = event.target
    const {value} = event.target

    setFormValues({...formValues, [name]:value})
  }

  const onSubmit = event => {
    event.preventDefault()

    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.role.trim()
    ){
      return
    }
    const newMember = { ...formValues, id:uuid() }
    setMembers([newMember, ...members])
    setFormValues(initialFormValues)
  }

  return (
   <div className='App'>
     <header className='App-header'>
       <h1>Team Members!</h1>
     </header>
     <Form values={formValues} onInputChange={onInputChange} onSubmit={onSubmit}/>

     {
       members.map(member => {
         return(
          <TeamMember key={member.id} details={member}/>
  
         )
       })
     }
   </div>
  );
}

export default App;
