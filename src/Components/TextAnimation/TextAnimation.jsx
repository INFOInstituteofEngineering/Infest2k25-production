import { Wave } from "react-animated-text";

const exampleStyle = {
  display: "inline-block",
  width: "80%",
  fontSize: "70px",
  letterSpace:"2px",
};

const text = "E V E N T"
export const Wave1 = () => (
    
  <div style={exampleStyle}>
    <Wave text={text} effect="fadeOut" effectChange={8} />
  </div>
);





