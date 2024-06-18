import { useState } from "react";

const AddUser = (props) => {
  const [nameState, setNameState] = useState("");
  const [ageState, setAgeState] = useState();
  const [genderState, setGenderState] = useState("");

  const submitToBackend = async () => {
    const req = await fetch("http://localhost:8080", {
      method: "POST",
      body: JSON.stringify({
        name: nameState,
        age: ageState,
        gender: genderState,
      }),
    });
    const res = await req.json();

    props.setInitialState((prev) => [...prev, res]); //! State Lifing
  };

  return (
    <>
      <input
        value={nameState}
        onChange={(e) => setNameState(e.target.value)}
        placeholder="name"
      />
      <input
        value={ageState}
        onChange={(e) => setAgeState(Number(e.target.value))}
        placeholder="age"
      />
      <input
        value={genderState}
        onChange={(e) => setGenderState(e.target.value)}
        placeholder="gender"
      />

      <button onClick={submitToBackend}>Add User</button>
    </>
  );
};

export default AddUser;
