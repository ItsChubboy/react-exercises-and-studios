import "./styling.css";

function ClickedButton() {
  function unclickButton() {
    alert("You are removing this pin from your saved list!")
  }
  return(
    <button id="clickedButton" onClick={unclickButton}>
      Saved
    </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
