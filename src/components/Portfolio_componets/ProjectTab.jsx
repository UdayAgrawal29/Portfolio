import React from "react";
import "./ProjectTab.css"; 
import { ExternalLink } from "lucide-react";

const projectList = [
  {
    title: "Aritmatika Solver",
    description: "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis...",
    image: "/assets/arithmetic.png",
    demoLink: "#",
    detailsLink: "#"
  },
  {
    title: "AutoChat-Discord",
    description: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal...",
    image: "/assets/discord.png",
    demoLink: "#",
    detailsLink: "#"
  },
  {
    title: "Buku Catatan",
    description: "Buku Catatan adalah website yang memungkinkan pengguna membuat, menyimpan, dan mengelola catatan...",
    image: "/assets/notebook.png",
    demoLink: "#",
    detailsLink: "#"
  },
  {
    title: "Growtopia-Calculator",
    description: "Growtopia Surgery Shop Calculator membantu pemain Growtopia menghitung keuntungan dari penjualan tools...",
    image: "/assets/growtopia.png",
    demoLink: "#",
    detailsLink: "#"
  },
  {
    title: "IT Support Bekasi",
    description: "Website IT Support Bekasi adalah proyek yang saya buat atas permintaan guru di sekolah...",
    image: "/assets/itsupport.png",
    demoLink: "#",
    detailsLink: "#"
  },
  {
    title: "Oprec 24",
    description: "Sebuah project pembuatan website organisasi yang mencakup deskripsi, galeri foto, dan profil anggota...",
    image: "/assets/oprec.png",
    demoLink: "#",
    detailsLink: "#"
  },
];

const ProjectTab = () => {
  return (
    <div className="project-grid">
      {projectList.map((proj, index) => (
        <div className="project-card" key={index}>
          <img src={proj.image} alt={proj.title} className="project-image" />
          <h3 className="project-title">{proj.title}</h3>
          <p className="project-description">{proj.description}</p>
          
            <div className="project-links">
              <div className="demo-placeholder">
                {proj.demoLink ? (
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-link"
                  >
                    Live Demo
                    <ExternalLink size={18} color="#60a5fa" />
                  </a>
                ) : (
                  <div style={{ width: "80px" }}></div> // Keeps spacing
                )}
              </div>

              <a href={proj.detailsLink} className="details-button">
                Details →
              </a>
            </div>

        </div>
      ))}
    </div>
  );
};

export default ProjectTab;
