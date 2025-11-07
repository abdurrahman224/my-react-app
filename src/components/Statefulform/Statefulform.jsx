
const Statefulform = ({children,  handleSignSubmit, Submit = "Submit" }) => {
  const handlelocelSubmit = (e) => {
    e.preventDefault();
  const form = e.target;

    const data = {
     name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    };
    handleSignSubmit(data);
    console.log("Form submitted:", data);
  };
  return (
    <div>
     {children}
      <form onSubmit={handlelocelSubmit}>
        <input type="text" name="name" placeholder="your name" />

        <br />
        <input type="email" name="email" placeholder="your name" />
        <br />
        <input type="password" name="password" required />
        <br />
        <input type="submit" value={Submit} />
      </form>
    </div>
  );
};

export default Statefulform;
