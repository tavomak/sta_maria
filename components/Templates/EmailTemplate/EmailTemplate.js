const EmailTemplate = ({ name, email, message }) => {
  return (
    <div>
      <p>
        <strong>Nombre:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Mensaje:</strong> {message}
      </p>
    </div>
  );
};

export default EmailTemplate;
