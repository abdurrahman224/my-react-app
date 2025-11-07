import { useEffect, useRef } from "react";

const Controlled = () => {
   const nemeref = useRef(null);
   const emailref = useRef(null);
   const pesswordref = useRef(null);


   useEffect(()=>{

nemeref.current.focus()


   },[])

   const handleSubmit = e => {
   e.preventDefault();
 console.log(nemeref.current.value);
 
 console.log(emailref.current.value);
 console.log(pesswordref.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nemeref}
          type="text"
          name="name"
          placeholder="your name"
        />
        <br />
        <input ref={emailref} type="email" name="email" placeholder="your name" />
        <br />
        <input type="password" name="password" required />
        <br />
        <input ref={pesswordref} type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Controlled;
