import React from 'react';

const Count = ({likes,commentlength}) => {
    return (
       <div className='flex justify-between mx-3'>

        <p>{likes?.length ===0 ?  "" : <span className='capitalize'>{likes.length} Pepole likes </span>}</p>
       <p> {commentlength?.length ===0 ? "":<span className='capitalize '>Commnets  {commentlength.length}</span>}</p>
       
      </div>
    );
};

export default Count;