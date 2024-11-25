import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to open the modal with the clicked image
    const openModal = (image) => {
        setSelectedImage(image);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="gallery-section">
            <h2 className="gallery-heading">Our Gallery</h2>
            <div className="gallery-container">
                {Array.from({ length: 20 }, (_, i) => (
                    <div className="gallery-item" key={i} onClick={() => openModal(`/gallery/gall${i + 1}.jpeg`)}>
                        <img
                            src={`/gallery/gall${i + 1}.jpeg`}
                            alt={`Gallery image ${i + 1}`}
                            className="gallery-image"
                        />
                    </div>
                ))}
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <span className="close-button" onClick={closeModal}>&times;</span>
                    <img src={selectedImage} alt="Enlarged view" className="modal-image" />
                </div>
            )}
        </section>
    );
};

export default Gallery;
