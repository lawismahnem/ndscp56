import { useEffect, useState } from "react";

function Records() {
  const [empdata, empdatachange] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="UserTable">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {empdata &&
            empdata.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>
                  <a>Edit</a>
                  <a>Remove</a>
                  <a>Details</a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
