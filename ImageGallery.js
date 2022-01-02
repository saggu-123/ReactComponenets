

import React , {useState} from 'react';
import { ImCross} from 'react-icons/im';



const ImageGallery = () => {

  const Images1 = 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg';
  const Images2 = 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg';
  const Images3 = 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg';
 


  const images = [Images1 , Images2 , Images3 ];

    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    
     //looping through our images array to create img elements
     const imageCards = images.map((image) => (
     <img className="image-card" onClick={() => showImage(image)} src={image} />
          ));
        
          
    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
      };
    
      //hide lightbox
      const hideLightBox = () => {
        setLightBoxDisplay(false);
      };
    
      //show next image in lightbox
      const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex >= images.length - 1) {
          setLightBoxDisplay(false);
        } else {
          let nextImage = images[currentIndex + 1];
          setImageToShow(nextImage);
        }
      };
    
      //show previous image in lightbox
      const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = images.indexOf(imageToShow);
        if (currentIndex <= 0) {
          setLightBoxDisplay(false);
        } else {
          let nextImage = images[currentIndex - 1];
          setImageToShow(nextImage);
        }
      };
    
    return (
      <>
        <div>{imageCards}</div>
        
        { lightboxDisplay? 
          <div id="lightbox"><div><ImCross id="cross" onClick={hideLightBox}></ImCross></div>
            <button onClick={showPrev}>⭠</button>
            <img id="lightbox-img" src={imageToShow}></img>
            <button onClick={showNext}>⭢</button>
          </div>
         : ""
        }
      </>
    );
  }
  

export default ImageGallery




    
 