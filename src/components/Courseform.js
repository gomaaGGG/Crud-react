import React from "react";

const Courseform = (props) => {
  return (
    
      <form onSubmit={props.addcourse}>
        <input type="text" onChange={props.updatefunction} value={props.cureent}></input>
        <button type="submit"> ADD course</button>
      </form>
  );
};

export default Courseform;
