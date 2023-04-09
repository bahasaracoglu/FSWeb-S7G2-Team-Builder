import React, { useEffect, useState } from "react";

export default function Form(props) {
  const emptyData = {
    isim: "",
    soyisim: "",
    email: "",
    rol: "",
  };

  const [formData, setFormData] = useState(emptyData);
  const [isEditting, setIsEditting] = useState(false);

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  useEffect(() => {
    props.duzenlenecekUye
      ? setFormData(props.duzenlenecekUye)
      : setFormData(emptyData);
    props.duzenlenecekUye ? setIsEditting(true) : setIsEditting(false);
  }, [props.duzenlenecekUye]);

  console.log("formData", formData);

  function submitHandler(event) {
    event.preventDefault();
    if (formData !== emptyData)
      props.duzenlenecekUye
        ? props.uyeDuzenle(formData)
        : props.addMember(formData);
  }

  function handleReset(event) {
    event.preventDefault();
    setFormData(emptyData);
    setIsEditting(false);
  }

  console.log("isEditing", isEditting);

  return (
    <div>
      {isEditting ? <h2>Edit Member</h2> : <h2>Add Member</h2>}
      <form onSubmit={submitHandler}>
        <div>
          <label className="label" htmlFor="isim">
            Name
          </label>
          <input
            className="form-input"
            onChange={handleOnChange}
            name="isim"
            type="text"
            id="isim"
            value={formData.isim}
          />
        </div>
        <div>
          <label className="label" htmlFor="soyisim">
            Surname
          </label>
          <input
            className="form-input"
            onChange={handleOnChange}
            name="soyisim"
            type="text"
            id="soyisim"
            value={formData.soyisim}
          />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            onChange={handleOnChange}
            name="email"
            type="email"
            id="email"
            value={formData.email}
          />
        </div>
        <div>
          <label className="label" htmlFor="rol">
            Position
          </label>
          <input
            className="form-input"
            onChange={handleOnChange}
            name="rol"
            type="text"
            id="rol"
            value={formData.rol}
          />
        </div>
        <div className="butonlar" style={{ textAlign: "center" }}>
          <span>
            <input
              className="button-gönder"
              type="submit"
              value={isEditting ? "Kaydet" : "Gönder"}
            />
          </span>
          <span>
            <button onClick={handleReset} className="button-reset">
              Reset
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}
