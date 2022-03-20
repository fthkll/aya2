import React, { useState } from "react";
import Button from "@mui/material/Button"
import {
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  FormTextarea,
} from "shards-react";
import logo from "./logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const INPUT_FIELDS = ["name", "age", "gsm", "email"];
const LABEL_FIELD_MAP = {
    /// burasi da refaktor edilebilir
  name: {
    label: "Ad Soyad",
    placeholder: "orn.: Alper Demirci",
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
    placeholder: "orn.: aya@estetik.com",
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
    console.log(e);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <img src={logo} alt="logo" className="logo" />
      <h2 className="header">Aya Estetik Form</h2>
      {INPUT_FIELDS.map((field) => {
        return (
          <FormGroup>
            <label htmlFor={field}>{LABEL_FIELD_MAP[field]["label"]}</label>
            <FormInput
              onChange={(e) =>
                setPerson({ ...person, [field]: e.target.value })
              }
              label={field}
              id={field}
              value={person[field]}
              placeholder={LABEL_FIELD_MAP[field]["placeholder"]}
            />
          </FormGroup>
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
      <FormGroup>
        <label htmlFor="service">Uygulama</label>
        <FormSelect
          id="service"
          onChange={(e) => setPerson({ ...person, service: e.target.value })}
        >
          <option value="epilasyon">Epilasyon</option>
          <option value="cilt bakimi">Cilt Bakimi</option>
          <option value="botox" disabled>
            Botox
          </option>
        </FormSelect>
      </FormGroup>
      <FormGroup>
        <label htmlFor="msg">Not</label>
        <FormTextarea
          className="msg"
          onChange={(e) => setPerson({ ...person, msg: e.target.value })}
          label="Message"
          id="msg"
          value={person.msg}
          placeholder=""
        />
      </FormGroup>

      <Button type="submit" variant="outlined">Gonder</Button>
    </Form>
  );
};
export default SubForm;
