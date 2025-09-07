
import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    { 
      id: 1, 
      title: 'Candid Moment', 
      image: '../assets/garden.jpg',
      description: 'Exploring the beautiful landscapes of Nepal with stunning mountain views',
      location: 'Kathmandu Valley',
      category: 'Travel Photography'
    },
    { 
      id: 2, 
      title: 'Traditional Style', 
      image: '../assets/sari.jpeg', 
      description: 'Embracing traditional Nepali fashion with modern photography techniques',
      location: 'Cultural Heritage Site',
      category: 'Portrait Photography'
    },
    { 
      id: 3, 
      title: 'Sunrise', 
      image: '../assets/sunrise.jpg', 
      description: 'Capturing the raw beauty of Nepal\'s geological wonders and natural formations',
      location: 'Rocky Terrain',
      category: 'Nature Photography'
    },
    { 
      id: 4, 
      title: 'Madhyapur Mahotsab', 
      image: '../assets/sunset.jpg', 
      description: 'Adventure photography showcasing Nepal\'s infrastructure against natural backdrops',
      location: 'Mountain Bridge',
      category: 'Adventure Photography'
    },
    { 
      id: 5, 
      title: 'Picnic in Nagarkot', 
      image: '../assets/picnic.jpg', 
      description: 'Experimental photography exploring creative lighting and atmospheric effects',
      location: 'Urban Setting',
      category: 'Creative Photography'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="modern-gallery">
          <div className="gallery-display">
            <div className="gallery-images-stack">
              {galleryImages.map((item, index) => (
                <div
                  key={item.id}
                  className={`gallery-image-card ${index === currentSlide ? 'active' : ''} ${
                    index === (currentSlide + 1) % galleryImages.length ? 'next' : ''
                  }`}
                  style={{
                    zIndex: index === currentSlide ? 3 : index === (currentSlide + 1) % galleryImages.length ? 2 : 1,
                    transform: `
                      ${index === currentSlide ? 'translateX(0) scale(1)' : 
                        index === (currentSlide + 1) % galleryImages.length ? 'translateX(30%) scale(0.85)' : 
                        'translateX(60%) scale(0.7)'}
                    `
                  }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="image-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="image-meta">
                      <span><i className="fas fa-map-marker-alt"></i> {item.location}</span>
                      <span><i className="fas fa-camera"></i> {item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="gallery-navigation">
            <div className="gallery-counter">
              <span>Image {currentSlide + 1} of {galleryImages.length}</span>
            </div>
            
            <div className="gallery-direct-buttons">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`direct-btn ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  Direct to {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
