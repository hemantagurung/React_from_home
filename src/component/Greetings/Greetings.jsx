const Greetings = (props) => {
  return (
    <div className="log">
      {props.isloggedin ? (
        <div className="log-content">{props.name}, you are logged in</div>
      ) : (
        <div className="log-content">{props.name}, you are not logged in</div>
      )}
    </div>
  );
};

export default Greetings;