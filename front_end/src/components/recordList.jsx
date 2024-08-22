import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardGeneral from './CardGeneral';
import { Fragment } from 'react';


// Set layout for table
const Record = (props) => (
  // table row and table data cell
  <tr>
    <td className="border border-gray-500 p-3">
    <p>
      {props.record.task}
    </p>
    </td>
    <td className="hidden sm:table-cell border border-gray-500 p-3">
    <p>
      {props.record.difficulty}
    </p>
    </td>
    <td className="hidden sm:table-cell border border-gray-500 p-3">
    <p>
      {props.record.duration}
    </p>
    </td>
    <td className="border border-gray-500 p-3 space-y-2">
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>
        <p>Edit</p>
      </Link>
      <br/>
      <button className="btn btn-link" onClick={() => { props.deleteRecord(props.record._id); }}>
        <p>Delete</p>
      </button>
    </td>
  </tr>
);


// Using a GET method, retrieve all records in the database
export default function RecordList() {
  //
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {

    // create an asyrnchronous function in effect hook
    async function getRecords() {

      // replace later, make a env variable instead of running this piece of code multiple times.
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        const appURL = 'http://localhost'
        } else {
        const appURL = 'http://joseschan.com'
      }
    

      const response = await fetch(appURL+`:5000/record/`);

      // If theres a problem, create an alert window with the error message
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      // update records with statehook
      const records = await response.json();
      setRecords(records);
    }

    // use asynchronous function that was previously made
    getRecords();

    return;
  }, [records.duration]); // data fetching of duration, for usage outside of useEffect 

  // This method will delete a record
  async function deleteRecord(id) {
    // wait until fetch promise has arisen
    await fetch(appURL+`:5000/${id}`, {
      method: "DELETE"
    });

    // update records without "deleted" element
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    // map state variable with record arrow function
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <Fragment>
      <h1 className="invisible">Record Table</h1>
        <div className="page-column">
          <CardGeneral>
            <h2 className="text-center">Website To-Do List / CRUD Example</h2>
            <div className="grid grid-flow-col text-center p-3"> 
              <table className="table-auto border border-gray-500">
                <thead className="border-b">
                  <tr>
                    <th className="border border-gray-500 p-3">
                      <h3>
                        Task
                      </h3>
                    </th>
                    <th className="hidden sm:table-cell border border-gray-500 p-3">
                      <h3>
                        Difficulty
                      </h3>
                    </th>
                    <th className="hidden sm:table-cell border border-gray-500 p-3">
                      <h3>
                        Duration
                      </h3>
                    </th>
                    <th className="border border-gray-500 p-3">
                      <h3>
                        Action
                      </h3>
                    </th>
                  </tr>
                </thead>
                <tbody>{recordList()}</tbody>
              </table>
            </div>
          </CardGeneral>
        </div>
    </Fragment>
  );
};