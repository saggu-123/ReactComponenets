import React from 'react'
import '../Sass/Modal.scss';
import ImageGallery from './ImageGallery';

const Modal = () => {

    return (
        <div>
             <div className="App">
      <h1>Simple React Lightbox</h1>
            
      <ImageGallery></ImageGallery>
    </div>
        </div>
    )
}

export default Modal
