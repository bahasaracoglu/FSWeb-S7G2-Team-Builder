import "./App.css";
import Form from "./Form";
import { useState } from "react";
function App() {
  const [members, setMembers] = useState([
    {
      isim: "Baha",
      soyisim: "Saraçoğlu",
      email: "bhsrcgl@gmail.com",
      rol: "Frontend Developer",
    },
    {
      isim: "Serra",
      soyisim: "Yilmaz",
      email: "1lightyagamisensei@gmail.com",
      rol: "SAP Consultanı",
    },

    {
      isim: "Ziyacan",
      soyisim: "Aydin",
      email: "ziyacann@gmail.com",
      rol: "Backend Developer",
    },
    {
      isim: "Kerem",
      soyisim: "Karaman",
      email: "karamann@gmail.com",
      rol: "Fullstack Developer",
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
  console.log("duzenlenecekUye", duzenlenecekUye);

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
        <h3>Members</h3>
        {members.map((member, i) => {
          const { isim, soyisim, email, rol } = member;
          return (
            <div key={i}>
              <li>
                <span className="isim">
                  {isim} {soyisim}
                </span>
                <span className="mail">{email}</span>
                <span>{rol}</span>
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
