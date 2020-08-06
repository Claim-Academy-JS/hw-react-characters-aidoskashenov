import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import api from "api";
import {Input} from "./Form/Input";

export const Table = () => {
  const [individs, setIndivids] = useState([]);
  const [added, setAdded] = useState("");

  useEffect(() => {
    const results = async () => {
      const ppl = await api.index();
      setIndivids(ppl);
    };
    results();
  }, []);

  const addPerson = (event) => {
    const newPerson = {};
    newPerson.name = event.target.children.name.value;
    newPerson.job = event.target.children.job.value;
  };

  return (
    <>
      <Form people={individs} />
      <Input handleSubmit={addPerson} />
    </>
  );
};
