import { useState } from 'react';
import { heroImg } from "../../constants";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <section className="w-[90%] mx-auto mt-32 max-lg:mt-20">
      <h1 className="py-4 text-4xl max-lg:text-3xl max-sm:text-xl  font-bold text-[#3D496F]">Gallery</h1>
      <div className="grid grid-cols-3 max-sm:grid-cols-1">
        {heroImg.map((ing, index) => (
          <div key={index} className="w-[90%] mx-auto my-4 flex-1 justify-center items-center">
            <img
              src={ing.imgsrc}
              className="w-96 max-sm:w-full cursor-pointer"
              onClick={() => openModal(ing.imgsrc)}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="max-w-full">
            <img src={selectedImg} className="w-full" alt="Selected" />
            <button onClick={closeModal} className="absolute top-4 right-4
             text-white bg-[#3D496F] text-2xl p-4 rounded-full">
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;