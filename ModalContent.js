import React from 'react'

const ModalContent = ({show , close , title}) => {


    return (
        <>
        {
            show? 
           <div className="modal-container">
                <button  onClick={()=> close()} >X</button>
                <div>{title}</div>
               
            </div> 
            : null
         }
        </>
    )
}

export default ModalContent
