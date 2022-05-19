function PauseScreen(props) {
  return (
    <div className="pauseScreen" onClick={props.onResume}>
      Click me to resume
    </div>
  );
}

export default PauseScreen;
