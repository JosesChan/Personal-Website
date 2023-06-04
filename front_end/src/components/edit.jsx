import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import TextButton from './TextButton';
import TextField from './TextField';
import Radio from './Radio';
import CardGeneral from './CardGeneral';

export default function Edit() {
  const [form, setForm] = useState({
    task: "",
    difficulty: "",
    length: "",
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
      task: form.task,
      difficulty: form.difficulty,
      length: form.time,
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
    <CardGeneral>
      <h1 className="text-xl font-medium text-large">Update Record</h1>
        <form onSubmit={onSubmit}>
          <div className="mt-4">
            <TextField type="text" element_id="task" element_text="Task" placeholder="Build a snowman" value_input={form.task} statehook={(e) => { updateForm({ task: e.target.value }) }} />
            <TextField type="text" element_id="difficulty" element_text="Difficulty" placeholder="Easy" value_input={form.difficulty} statehook={(e) => { updateForm({ difficulty: e.target.value }) }} />
          </div>
          <div className="my-6">
            <Radio
              element_id="duration"
              type="radio"
              value_input="Short"
              element_name="durationLength"
              checked_if={form.length === "Short"}
              statehook={(e) => { updateForm({ length: e.target.value }) }}
            />

            <Radio
              element_id="duration"
              type="radio"
              value_input="Medium"
              element_name="durationLength"
              checked_if={form.length === "Medium"}
              statehook={(e) => { updateForm({ length: e.target.value }) }}
            />

            <Radio
              element_id="duration"
              type="radio"
              value_input="Long"
              element_name="durationLength"
              checked_if={form.length === "Long"}
              statehook={(e) => { updateForm({ length: e.target.value }) }}
            />
            <TextButton type="submit" prompt="Edit user" />
          </div>
        </form>
    </CardGeneral>
  );
}