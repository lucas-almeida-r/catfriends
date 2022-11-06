import React from "react";

const Scroll = (props) => {
  // height: '100vh' is not ideal, but it's okay for this simple app
  return (
    <div style={{ overflowY: 'scroll', height: '100vh' }}>
      {props.children}
    </div>
  );
}

export default Scroll;