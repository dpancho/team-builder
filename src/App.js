import React, {useState} from 'react';
import Form from "./components/Form";
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState ({
    name: "",
    email: "",
    role: ""
  });
  const [team, setTeam] = useState([]);

  function changeHandle(e){
    setTeamMember({...teamMember, [e.target.name]: e.target.value});
  }

  function submitHandle(e){
    e.preventDefault();
    setTeamMember({ 
      name: "",
      email: "",
      role: ""
    });
  }

  function renderMember(e) {
    if (teamMember.name === "") {
      e.preventDefault();
    } else if (teamMember.email === "") {
      e.preventDefault();
    } else if (teamMember.role === "") {
      e.preventDefault();
    } else if (!teamMember.email.includes("@")) {
      e.preventDefault();
    } else {
      setTeam([...team, teamMember]);
    }
  }
  
  return (
    <div className="App">
      <h1>Add Member Yo</h1>
      <Form 
        team={team}
        teamMember={teamMember}
        submitHandle={submitHandle}
        changeHandle={changeHandle}
        renderMember={renderMember}
      />
      {team.map((member, index) => (
        <section className="member-card" key={index}>
          <h1>{member.name}</h1>
          <h1>{member.email}</h1>
          <h1>{member.role}</h1>
        </section>
      ))}
    </div>
  );
}


export default App;
