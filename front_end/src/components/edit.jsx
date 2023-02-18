import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import ContainerText from './ContainerText';
import TextButton from './TextButton';
import TextField from './TextField';
import Radio from './Radio';

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/Records");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      position: form.position,
      level: form.level,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/Records");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <ContainerText inputHead="Update Record"
        inputBody={
          <form onSubmit={onSubmit}>
            <div className="mt-4">
              <TextField type="text" element_id="name" element_text="Name" placeholder="Joe" value_input={form.name} statehook={(e) => { updateForm({ name: e.target.value }) }} />
              <TextField type="text" element_id="position" element_text="Position" placeholder="Manager" value_input={form.position} statehook={(e) => { updateForm({ position: e.target.value }) }} />
            </div>
            <div className="my-6">
              <Radio
                element_id="positionIntern"
                type="radio"
                value_input="Intern"
                element_name="positionOptions"
                checked_if={form.level === "Intern"}
                statehook={(e) => { updateForm({ level: e.target.value }) }}
              />


              <Radio
                element_id="positionIntern"
                type="radio"
                value_input="Junior"
                element_name="positionOptions"
                checked_if={form.level === "Junior"}
                statehook={(e) => { updateForm({ level: e.target.value }) }}
              />

              <Radio
                element_id="positionIntern"
                type="radio"
                value_input="Senior"
                element_name="positionOptions"
                checked_if={form.level === "Senior"}
                statehook={(e) => { updateForm({ level: e.target.value }) }}
              />
              <TextButton type="submit" prompt="Edit user" />
            </div>
          </form>
        } />
    </div>
  );
}