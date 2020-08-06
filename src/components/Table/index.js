import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import api from "api";
import {Input} from "./Form/Input";

export const Table = () => {
  const [individs, setIndivids] = useState([]);


  useEffect(() => {
    const results = async () => {
      const ppl = await api.index();
      setIndivids(ppl);
    };
    results();
  }, []);

  const addPerson = (event) => {
    const newPerson = {};
    newPerson.name = event.target.name.value;
    newPerson.job = event.target.job.value;

    setIndivids( newPerson ? individs.concat(newPerson) : individs)
  };



  return (
    <>
      <Input handleAddPerson={addPerson} />
      <Form people={individs} />

    </>
  );
};
