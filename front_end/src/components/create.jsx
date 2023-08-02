import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import TextButton from './TextButton';
import TextField from './TextField';
import Radio from './Radio';
import CardGeneral from './CardGeneral';

// consider using useReducer

// export details of record to other file
export default function Create() {
  const [form, setForm] = useState({
    task: "",
    difficulty: "", 
    duration: "",
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

    setForm({ task: "", difficulty: "", duration: "" });
    navigate("/Records");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <Fragment>
      <h1 className="invisible">Create Record Page</h1>
      <div className="page-column">
        <CardGeneral>
          <h2>Create New Record</h2>
            <form onSubmit={onSubmit}>
              <div className="mt-4">
                <TextField type="text" element_id="task" element_text="Task" placeholder="Build a snowman!" value_input={form.task} statehook={(e) => { updateForm({ task: e.target.value }) }} />
                <br/>
                <TextField type="text" element_id="difficulty" element_text="Difficulty" placeholder="Easy" value_input={form.difficulty} statehook={(e) => { updateForm({ difficulty: e.target.value }) }} />
              </div>
              <div className="my-6">
                <Radio
                  element_id="duration"
                  value_input="Short"
                  element_name="duration"
                  checked_if={form.duration === "Short"}
                  statehook={(e) => { updateForm({ duration: e.target.value }) }}
                />

                <Radio
                  element_id="duration"
                  value_input="Medium"
                  element_name="duration"
                  checked_if={form.duration === "Medium"}
                  statehook={(e) => { updateForm({ duration: e.target.value }) }}
                />

                <Radio
                  element_id="duration"
                  value_input="Long"
                  element_name="duration"
                  checked_if={form.duration === "Long"}
                  statehook={(e) => { updateForm({ duration: e.target.value }) }}
                />
                <TextButton type="submit" prompt="Create user" />
              </div>
            </form>
          </CardGeneral>
        </div>
    </Fragment>
  );
};