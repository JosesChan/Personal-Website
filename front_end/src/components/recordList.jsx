import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContainerText from './ContainerText';

// Set layout for table
const Record = (props) => (
  // table row and table data cell
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.position}</td>
    <td>{props.record.level}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
      <button className="btn btn-link" onClick={() => { props.deleteRecord(props.record._id); }}>
        Delete
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
      const response = await fetch(`http://localhost:5000/record/`);

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
  }, [records.length]); // data fetching of length, for usage outside of useEffect 

  // This method will delete a record
  async function deleteRecord(id) {
    // wait until fetch promise has arisen
    await fetch(`http://localhost:5000/${id}`, {
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
    <div>
      <ContainerText inputHead="Record List"
        inputText={
          <table className="table-auto">
            <thead className="border-b">
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{recordList()}</tbody>
          </table>
        } />
    </div>
  );
}