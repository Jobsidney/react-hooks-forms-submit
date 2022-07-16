import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  const handleSubmitChange=(event)=>{
    event.preventDefault();
    const formData={
      firstName:firstName,
      lastName:lastName,
    }
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray)
    setFirstName(event.target.reset())
    console.log(submittedData);

  }
  const listOfPeople = submittedData.map((person ,index)=>{
    return(
      <div key={index}>
        {person.firstName} {person.lastName}
      </div>
    )
  })

  return (
    <div>
    <form onSubmit={handleSubmitChange}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {listOfPeople}
    </div>
  );
}

export default Form;
