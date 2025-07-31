import "./App.css";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import { useState } from "react";



const App = () => {

  const [mailboxes, setMailBoxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newMailBox) => {
    newMailBox._id = mailboxes.length + 1;
    setMailBoxes([...mailboxes, newMailBox]);
  };

  const addLetter = (NewLetter) => {
    NewLetter._id = letters.length + 1;
    setLetters([...letters, NewLetter]);
  }


  return (
    <>
      <NavBar/>
      <h1>Hello world!</h1>

      <Routes>
        <Route path='/' element={
          <main>
            <h1>Post Office</h1>
          </main>} />

        <Route path="/mailboxes" element={<MailboxList/>}/>
        <Route path="/new-mailbox" element={<MailboxForm addBox= {addBox} />}/>
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes = {mailboxes} />} />
      </Routes>
    </>
  )
};

export default App;
