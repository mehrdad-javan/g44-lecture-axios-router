import React from 'react';

const Message = (props) => {
    return (
        <div className='container'>
          {props.message && <div className={`alert alert-${props.message.type}`}>{props.message.value}</div>}  
        </div>
    );
};

export default Message;