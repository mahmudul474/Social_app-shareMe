import React from 'react';

const Mymedia = ({media}) => {
    return (
 
       
        <div>
            {
                media.media &&  <img src={media.media}  className="rounded-lg" />
           }
          </div>

            
    
              
    
    );
};

export default Mymedia;