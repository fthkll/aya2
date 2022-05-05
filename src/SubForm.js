import React, { useState } from "react";
import logo from "./logo.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const INPUT_FIELDS = ["name", "age", "gsm", "email"];
const LABEL_FIELD_MAP = {
    /// burasi da refaktor edilebilir
  name: {
    label: "Ad Soyad",
    placeholder: "Isim Soyisim",
  },
  age: {
    label: "Dogum Tarihi",
    placeholder: "Sadece yil yaziniz",
  },
  gsm: {
    label: "Telefon",
    placeholder: "orn.: 05xx xxx xx xx",
  },
  email: {
    label: "Mail Adresiniz",
    placeholder: "orn.: aya@gmail.com",
  },
};

const SubForm = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
    gsm: "",
    email: "",
    service: "",
    msg: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src={logo} alt="logo" className="logo" />
      <h2 className="header">Aya Estetik Form</h2>
      {INPUT_FIELDS.map((field) => {
        return (
          <div>
            <label htmlFor={field}>{LABEL_FIELD_MAP[field]["label"]}</label>
            <input
              onChange={(e) =>
                setPerson({ ...person, [field]: e.target.value })
              }
              type="text"
              label={field}
              id={field}
              value={person[field]}
              placeholder={LABEL_FIELD_MAP[field]["placeholder"]}
            />
          </div>
        );
      })}
      {/* <FormGroup>
        <label htmlFor="age">Yasiniz</label>
        <FormInput
          type="date"
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
          label="Age"
          id="age"
          value={person.age}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <FormInput
          onChange={(e) => setPerson({ ...person, email: e.target.value })}
          label="Email"
          id="email"
          value={person.email}
          placeholder="ornek@ayaestetik.com"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="telephone">Telefon</label>
        <FormInput
          onChange={(e) => setPerson({ ...person, gsm: e.target.value })}
          label="Telephone"
          id="telephone"
          value={person.gsm}
          placeholder="0 5xx xxxxxxx"
        />
      </FormGroup> */}
      <div>
        <label htmlFor="service">Uygulama</label>
        <select
          id="service"
          onChange={(e) => setPerson({ ...person, service: e.target.value })}
        >
          <option value="epilasyon">Epilasyon</option>
          <option value="cilt bakimi">Cilt Bakimi</option>
          <option value="botox" disabled>
            Botox
          </option>
        </select>
      </div>
      <div>
        <label htmlFor="msg">Not</label>
        <input
          className="msg"
          onChange={(e) => setPerson({ ...person, msg: e.target.value })}
          label="Message"
          id="msg"
          type="text"
          value={person.msg}
          placeholder=""
        />
      </div>

      <button type="submit" variant="outlined">Gonder</button>
    </form>
  );
};
export default SubForm;
