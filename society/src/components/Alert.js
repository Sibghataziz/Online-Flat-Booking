import React from "react";

export default function Alert(props) {
    const capitalize = (word) => {
        const cap = word.toLowerCase();
        return cap.charAt(0).toUpperCase()+cap.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{
      position:"fixed",
      top: "30px",
      left: "5px",
      zIndex:"999"
    }} role="alert">
      <strong>{capitalize(props.alert.type)}!! </strong>{props.alert.msg}
    </div>
  );
}
