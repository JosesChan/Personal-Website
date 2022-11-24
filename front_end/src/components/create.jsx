import React, { useState } from "react";
import { useNavigate } from "react-router";
import ContainerText from './ContainerText';
import TextButton from './TextButton';
import TextField from './TextField';
import Radio from './Radio';
// export details of record to other file
export default function Create() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties using spread notation.
  // ...var lets you reference multiple variables when you aren't sure of the amount being passed
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
      .catch(error => {
        window.alert(error);
        return;
      });

    setForm({ name: "", position: "", level: "" });
    navigate("/Records");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div className="space-y-6 items-center">
      <ContainerText inputHead="Create New Record"
        inputText={
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
              <TextButton type="submit" prompt="Create user" />
              </div>
          </form>
        } />
    </div>
  );
}