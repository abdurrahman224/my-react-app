import { useState } from "react";

const SubmetFrom = () => {
  const [name, setname] = useState("name");
  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState();
const [Error , setError]=useState('')

  const handleEmailonChange = (e) => {
    setEmail(e.target.value);
  };
  const handlepasswordonChange = (e) => {
    
    setpassword(e.target.value);
  };
  const handlenameChange = (e) => {
    setname(e.target.value);
  };

  const helonSubmit = (e) => {
    e.preventDefault();
password.length < 6 ?setError("Password must be at least 6 characters") :setError("");
  
    console.log(name, email, password);
  };
  

  return (
    <div className="text-3xl text-amber-300">

      <form onSubmit={helonSubmit}>
        <input
          value={name}
          onChange={handlenameChange}
          className="text-amber-700"
          type="text"
          name="name"
          placeholder="your name"
        />
        <br />
        <input
          onChange={handleEmailonChange}
          type="email"
          name="email"
          placeholder="your name"
        />
        <br />
        <input
          onChange={handlepasswordonChange}
          type="password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>

      <p>{Error}</p>

      <h3>{name}</h3>
      <h2>{email}</h2>
      <h2>{password}</h2>
    </div>
  );
};

export default SubmetFrom;
