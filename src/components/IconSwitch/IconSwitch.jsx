import React from 'react';

export default function IconSwitch(props) {
  const {icon, onSwitch} = props;

  return (
    <span className="material-icons" onClick = {onSwitch}>
      {icon}
    </span>
  )
}
