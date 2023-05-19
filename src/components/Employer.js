import React, { useState } from 'react';
import '../css/employer.css';
import Image1 from '../images/employer1.png';
import Image2 from '../images/employer2.png';
import Image3 from '../images/employer3.png';
import Image4 from '../images/employer4.png';
import Image5 from '../images/employer5.png';
import Image6 from '../images/employer6.png';
import Image7 from '../images/employer7.png';
import Image8 from '../images/employer8.png';
import EmployerData from '../data/EmployerData';

function Employer() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [employerData, setEmployerData] = useState(null);

  const images = [
    { id: 1, src: Image1 },
    { id: 2, src: Image2 },
    { id: 3, src: Image3 },
    { id: 4, src: Image4 },
    { id: 5, src: Image5 },
    { id: 6, src: Image6 },
    { id: 7, src: Image7 },
    { id: 8, src: Image8 }
  ];

  const handleImageClick = (id) => {
    const clickedImage = images.find((image) => image.id === id);
    setSelectedImage(clickedImage);
    setEmployerData(EmployerData[id - 1]);
  };

  return (
    <div className="employer-container">
      <div className="employer-info">
        <h2>Hello, we are the essence of Centido, do you want to know more about us </h2>
        {selectedImage && employerData ? (
          <div>
            <h3>{employerData.name}</h3>
            <h3>{employerData.title}</h3>
            <p>{employerData.description}</p>
          </div>
        ) : (
          <p>This is some information about the employer</p>
        )}
      </div>
      <div className="employer-grid">
        {images.map((image) => (
          <div className="employer-img-container" key={image.id}>
            <img
              src={image.src}
              alt={`Employer Image ${image.id}`}
              onClick={() => handleImageClick(image.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employer;
