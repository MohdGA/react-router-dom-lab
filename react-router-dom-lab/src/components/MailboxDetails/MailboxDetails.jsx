import { useParams } from "react-router";

const MailboxDetails = (props) => {
  
  const params = useParams();

  const singleMailBox = props.mailboxes.find((mailbox) => {
    mailbox._id === Number(params.mailboxId);
  })

  return(
    <>
      <h1>MailBox</h1>
      <dl>
        <dt>boxSize:</dt>
        <dd>{singleMailBox.boxSize}</dd>
        <dt>boxOwner:</dt>
        <dd>{singleMailBox.boxOwner}</dd>
      </dl>
    </>
  )
}

export default MailboxDetails;