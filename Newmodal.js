import React  , {useState} from 'react'
import Button from '../Button/Button'
import ModalContent from './ModalContent';
const Newmodal = () => {
    const [openModal , setopenModal]= useState(false);

 const OpenModalfn =() =>{
     setopenModal (!openModal);
 }

    return (
        <>
            <div >
               <Button onClick={OpenModalfn}>Toggle </Button>
            </div>
             <ModalContent show={openModal} title="HELLO GUYZ " close={OpenModalfn}></ModalContent>
        </>
    )
}

export default Newmodal
