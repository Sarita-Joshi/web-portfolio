import React, {useState} from 'react';

import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "../components/images";


import styles from '../styles/Landing.module.scss'
import {sectionInfo as info} from '../components/Info'


// const images = IMAGES.map((image) => ({
//   ...image,
//   customOverlay: (
//     <div className="custom-overlay__caption">
//       <div>{image.caption}</div>
//       {image.tags &&
//         image.tags.map((t, index) => (
//           <div key={index} className="custom-overlay__tag">
//             {t.title}
//           </div>
//         ))}
//     </div>
//   ),
// }));

import Modal from 'react-modal';

const Photo = ({ src, alt }) => {
  return (
    <div className="photo">
      <img src={src} alt={alt} />
    </div>
  );
};

const ImageModal = ({ isOpen, closeModal, imageUrl, altText }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
    >
      <button onClick={closeModal} className="close-button">
        Close
      </button>
      <img src={imageUrl} alt={altText} />
    </Modal>
  );
};

const PhotoGallery = ({ photos, onImageClick }) => {
  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <Photo
          key={index}
          src={photo.src}
          alt={photo.alt}
          onClick={() => onImageClick(photo.src)} // Call onImageClick when an image is clicked
        />
      ))}
    </div>
  );
};



const Portfolio = () => {

  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

    
  return (
    // <section className='section bg-green-200'>
    //   <div className={styles.section_title}>
    //       {info.map(i =>  {
    //         return <div className={styles.listing} key={i.title}>
    //         <img className={styles.listing_img} src={i.img} alt={i.title} />
    //         <div className={styles.listing_text} >
    //             <div className={styles.text}>
    //                 <h3>{i.title}</h3>
    //             </div>
    //         </div>
    //     </div>
    //       }
    //       )}                             
    //   </div>
    //   </section>


    <section className='section bg-green-200'>

      <PhotoGallery photos={info} onImageClick={openModal} />
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        imageUrl={selectedImage}
        altText="Image"
      />



    </section>




  // return <section className='section bg-green-200'>

    
  //   <div>
  //     <Gallery images={images} enableImageSelection={false} />
  //   </div>
  // </section>;

  )
};

export default Portfolio;
