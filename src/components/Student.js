import { Paper, Button } from "@mui/material";
import { Container } from "@mui/material";
// import { makeStyles } from "@mui/material/";
import TextField from "@mui/material/TextField";
import { useState } from "react";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

export default function Student() {
  const paperStyle = {
    padding: "50px 20px",
    width: 600,
    margin: "20px auto",
  };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const formStyle = { margin: "20px 20px" };

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student Added");
    });
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>Add Student</h1>
        <form style={formStyle}>
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Student Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
        {name}
        {address}
      </Paper>
    </Container>
  );
}
