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
    {
      isim: "ziyacan",
      soyisim: "aydin",
      email: "ziyacann@gmail.com",
      rol: "backend dev",
    },
    {
      isim: "kerem",
      soyisim: "karaman",
      email: "karamann@gmail.com",
      rol: "full stack dev",
    },
  ]);

  const [duzenlenecekUye, setDuzenlenecekUye] = useState();
  const [isEditting, setIsEditting] = useState(false);
  function addMember(newMember) {
    setMembers([...members, newMember]);
  }

  console.log(members);

  const handleEdit = (member, i) => {
    setDuzenlenecekUye(member);
    setIsEditting(true);
  };
  console.log(duzenlenecekUye);

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
          const { isim, soyisim, email, rol } = member;
          return (
            <div key={i}>
              <li>
                {isim} {soyisim} {email} {rol}{" "}
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
