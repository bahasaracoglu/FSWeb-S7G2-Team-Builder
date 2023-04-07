import { useEffect, useState } from "react";

export default function Form(props) {
  const { addMember } = props;

  const emtyData = {
    isim: "",
    soyisim: "",
    email: "",
    rol: "",
  };

  const [formData, setFormData] = useState(emtyData);
  const [isEditting, setIsEditting] = useState(false);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  function submitHandler(e) {
    e.preventDefault();
    addMember(formData);
  }

  useEffect(() => {
    setFormData(props.duzenlenecekUye);
  }, [props.duzenlenecekUye]);

  return (
    <div>
      {isEditting ? <h2>Üye Düzenle</h2> : <h2>Yeni Üye Ekle</h2>}
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="isim">Name:</label>
          <input
            onChange={handleOnChange}
            name="isim"
            type="text"
            id="isim"
            value={formData.isim}
          />
        </div>
        <div>
          <label htmlFor="soyisim">Surname:</label>
          <input
            onChange={handleOnChange}
            name="soyisim"
            type="text"
            id="soyisim"
            value={formData.soyisim}
          />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input
            onChange={handleOnChange}
            name="email"
            type="email"
            id="email"
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="rol">Position:</label>
          <input
            onChange={handleOnChange}
            name="rol"
            type="text"
            id="rol"
            value={formData.rol}
          />
        </div>
        <span>
          <input type="submit" value="Gönder" />
        </span>
      </form>
    </div>
  );
}
