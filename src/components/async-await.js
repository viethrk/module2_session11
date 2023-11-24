import axios from "axios";
import { useRef, useState } from "react";

const AsyncAwaitComponent = () => {
  const [categorys, setCategorys] = useState([]);
  // cal API
  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8000/users");

    setCategorys(response.data);
  };

  const createUser = async () => {
    await axios.post("http://localhost:8000/users", {
      user_name: userNameRef.current.value,
      password: passRef.current.value,
    });

    fetchApi();
  };

  const callApiUpdateUser = async () => {
    await axios.put(`http://localhost:8000/users/${idUpdate}`, {
      user_name: userNameRef.current.value,
      password: passRef.current.value,
    });

    userNameRef.current.value = "";
    passRef.current.value = "";
    setIdUpdate("");

    fetchApi();
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);

    fetchApi();
  };

  // handle event
  const updateUser = async (userUpdate) => {
    const { id, user_name, password } = userUpdate;
    setIdUpdate(id);
    userNameRef.current.value = user_name;
    passRef.current.value = password;
  };

  // ref
  const userNameRef = useRef("");
  const passRef = useRef("");
  const [idUpdate, setIdUpdate] = useState("");

  return (
    <div>
      AsyncAwaitComponent
      <div>
        <div>
          <label>UserName</label>
          <input ref={userNameRef} />
        </div>
        <div>
          <label>Password</label>
          <input ref={passRef} />
        </div>
      </div>
      <br />
      <button onClick={() => fetchApi()}>AsyncAwaitComponent</button>
      &nbsp;&nbsp;
      {!idUpdate ? (
        <button onClick={() => createUser()}>Create User</button>
      ) : (
        <button onClick={() => callApiUpdateUser()}>Update</button>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "40%" }}>
          {categorys.map((category) => (
            <div
              key={category.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{category.id}</span>&nbsp;&nbsp;
              <span>{category.user_name}</span>&nbsp;&nbsp;
              <span>{category.password}</span>&nbsp;&nbsp;
              <button onClick={() => updateUser(category)}>Update</button>
              &nbsp;&nbsp;
              <button onClick={() => deleteUser(category.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AsyncAwaitComponent;
