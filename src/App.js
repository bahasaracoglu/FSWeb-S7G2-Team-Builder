import "./App.css";
import Form from "./Form";
import { useState } from "react";
function App() {
  const [members, setMembers] = useState([
    {
      isim: "baha",
      soyisim: "saracoglu",
      email: "bhsrcgl@gmail.com",
      rol: "frontend dev",
    },
  ]);

  function addMember(newMember) {
    setMembers([...members, newMember]);
  }

  console.log(members);

  function handleEdit(member, i) {
    setDuzenlenecekUye(member);
  }

  const [duzenlenecekUye, setDuzenlenecekUye] = useState({});

  function uyeDuzenle(editedMember) {
    const updatedMembers = members.map((member) =>
      member === duzenlenecekUye ? editedMember : member
    );
    setMembers(updatedMembers);
  }

  return (
    <div className="App">
      <Form
        addMember={addMember}
        duzenlenecekUye={duzenlenecekUye}
        uyeDuzenle={uyeDuzenle}
      />
      <ul>
        {members.map((member, i) => {
          return (
            <div key={i}>
              <li>
                {member.isim} {member.soyisim} {member.email} {member.rol}
              </li>
              <button onClick={() => handleEdit(member, i)}>Edit</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
