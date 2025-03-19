//const Dashboard = () =>  {
//    return <h1>Dashboard page</h1>;
//};

//export default Dashboard; 

import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      if (data) setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard Page</h1>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Dashboard;