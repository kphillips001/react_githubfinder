import React from 'react';

const Alert = ({ alert }) => {
  return (
    // as long as alert is not equal to null then want to show a div
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
