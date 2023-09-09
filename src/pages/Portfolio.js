import React, { useEffect, useState  } from "react";

import { portrait, pr21, travel, a1, e2 } from "../components/Info";

import styles from "../styles/images.css";

import { sectionInfo } from "../components/Info";


const ImageGrid = ({ imageList }) => {

  const [imageWidths, setImageWidths] = useState([]);

  useEffect(() => {
    // Calculate image widths based on aspect ratios
    const calculatedWidths = imageList.map((item) => {
      const img = new Image();
      img.src = item.img;
      console.log([img.width , img.height]);
      const aspectRatio = img.width / img.height;
      const calculatedWidth = 100 * aspectRatio; // Adjust as needed
      return `${calculatedWidth}%`;
    });
    console.log(calculatedWidths);
    setImageWidths(calculatedWidths);
  }, [imageList]);

  return (
    <div className={"new_image_grid flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8"}>
      {/* Map through imageList and render images */}
      {imageList.map((item, index) => (
        <div key={index} className={styles.new_image_div} style={{ width: imageWidths[index] }}>
          <img src={item.img} alt={item.title} className={styles.new_image_item} />
        </div>
      ))}
    </div>
  );
};

const Portfolio = () => {
  // const [selectedFolder, setSelectedFolder] = useState(null);

  // const handleFolderClick = (folderIndex) => {
  //   setSelectedFolder(folderIndex);
  // };

  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (index) => {
    console.log(index);
    console.log(sectionInfo[index]);
    setClickedImage(index);
  };

  const resetImageClick = () => {
    setClickedImage(null);
  };

  return (
    <section className="section bg-green-200 scrollable-content">

      <div className="container mx-auto h-full relative ">
      { clickedImage == null ? (
        <div className="image-grid flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
 
            {sectionInfo.map((item, index) => {
              return <div key={index} className="image-item" onClick={() => handleImageClick(index)}>
                <img src={item.img} alt={item.title} />
                <div className="image-title">{item.title}</div>
              </div>;
            })}
  
        </div>
      ) :
      (
        <div>
          <a className='cursor-pointer' target="_blank" onClick={() => resetImageClick()}>back</a>

          {/* {sectionInfo[clickedImage].photos.map((item, index) => {
            return <div key={index} className="image-item">
              <img style={{width:'auto', height:'100px'}} src={item.img} alt={item.alt} />
            </div>;
          })} */}
          <ImageGrid imageList={sectionInfo[clickedImage].photos}/>
          

        </div>
      )
          }
        
      </div>

    </section>
  );

  // return (
  // <section className='section bg-green-200'>
  //   <div className='container mx-auto h-full relative'>
  //     <div className='flex flex-col lg:flex-row h-full
  //     items-center justify-start gap-x-24 text center
  //     lg:text-left pt-24 lg:pt-36 pb-8'>
  //       <div>images</div>
  //     </div>
  //   </div>
  // </section>

  // )
};

export default Portfolio;
