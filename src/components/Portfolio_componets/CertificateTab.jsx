  import React, { useState } from 'react';
  import './CertificateTab.css';

    const certificates = [
      {
        title: 'Machine Learning',
        image: 'images/certificates/ML.jpg',
      },
      {
        title: 'Web Programming',
        image: 'images/certificates/web dev.jpg',
        
      },
      {
        title: 'C Training',
        image: 'images/certificates/C.jpg',
       
      },
      {
        title: 'C++ Training',
        image: 'images/certificates/Cpp.jpg',
        
      },
      {
        title: 'Python Training',
        image: 'images/certificates/Python.jpg',
        
      },
    ];

  function CertificateTab() {
    const [selected, setSelected] = useState(null);
    return (
      <div className="certificates-container">
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card" onClick={() => setSelected(cert)}>
              <img src={cert.image} alt={cert.title} />
              <div className="overlay">
                <span>[ ] View Certificate</span>
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-btn" onClick={() => setSelected(null)}>×</button>
              <img src={selected.image} alt={selected.title} />
            </div>
          </div>
        )}
      </div>
    );
  }  

  export default CertificateTab;
