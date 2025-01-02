"use client";
import { useEffect } from "react";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
import GalleryImg1 from "../../assets/images/gallery-1.jpeg";
import GalleryImg2 from "../../assets/images/gallery-2.png";
import GalleryImg3 from "../../assets/images/gallery-3.jpeg";
import GalleryImg4 from "../../assets/images/gallery-4.jpeg";
import GalleryImg5 from "../../assets/images/gallery-5.jpeg";
import GalleryImg6 from "../../assets/images/gallery-6.jpeg";

const GalleryPage = () => {
  useEffect(() => {
    const galleryElement = document.getElementById("gallery-of-page");
    // Backup original console.log
    const originalConsoleLog = console.log;

    // Disable console.log
    console.log = () => {};
    if (galleryElement) {
      lightGallery(galleryElement, {
        plugins: [],
        speed: 500,
      });
    }
    // Restore original console.log after lightGallery initialization
    console.log = originalConsoleLog;
  }, []);

  return (
    <main id="gallery-page">
      <section className="section gallery-section">
        <div className="container">
          <h1 className="section-title">Gallery</h1>
          <p className="section-sub-title top">Our latest and best photos</p>
          <p className="section-sub-title">
            We love to take pictures and show them to the world.
          </p>
          <div id="gallery-of-page" className="row gallery-list">
            <a
              href={GalleryImg1.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg1.src} alt="" />
              </div>
            </a>
            <a
              href={GalleryImg2.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg2.src} alt="" />
              </div>
            </a>
            <a
              href={GalleryImg3.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg3.src} alt="" />
              </div>
            </a>
            <a
              href={GalleryImg4.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg4.src} alt="" />
              </div>
            </a>
            <a
              href={GalleryImg5.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg5.src} alt="" />
              </div>
            </a>
            <a
              href={GalleryImg6.src}
              className="col-4 col-small-6 gallery-item"
            >
              <div className="gallery-wrapper-img">
                <img className="gallery-img" src={GalleryImg6.src} alt="" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default GalleryPage;
