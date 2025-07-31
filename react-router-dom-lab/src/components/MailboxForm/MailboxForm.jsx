import { useState } from "react";
import { useNavigate } from "react-router";

const initialMail = {
  boxOwner: "",
  boxSize: ""
};
const MailboxForm = (props) => {

  const [formData, setFormData] = useState(initialMail);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    navigate('/mailboxes');
  };

  const handleChange = ({target}) => {
    console.log(target.name)
    setFormData({...formData, [target.name]: target.value});
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOnwer">boxOnwer:</label>
        <input 
        type="text"
        name="boxOwner"
        id="boxOnwer"
        value={formData.boxOwner}
        onChange={handleChange} 
        />

        <label htmlFor="boxSize">boxSize:</label>
        <input 
        type="text"
        name="boxSize"
        id="boxSize"
        value={formData.boxSize}
        onChange={handleChange} 
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MailboxForm;