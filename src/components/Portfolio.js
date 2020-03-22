import React from "react";
import img1 from "../assets/img/portfolio/portfolio-1.jpg";
import img2 from "../assets/img/portfolio/portfolio-2.jpg";
import img3 from "../assets/img/portfolio/portfolio-3.jpg";
import img4 from "../assets/img/portfolio/portfolio-4.jpg";
import img5 from "../assets/img/portfolio/portfolio-5.jpg";
import img6 from "../assets/img/portfolio/portfolio-6.jpg";
import img7 from "../assets/img/portfolio/portfolio-7.jpg";
import img8 from "../assets/img/portfolio/portfolio-8.jpg";
import img9 from "../assets/img/portfolio/portfolio-9.jpg";

const Portfolio = () => {
  return (
    // <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={img1} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={img1}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="#" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={img2} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={img2}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="#" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={img3} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={img3}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="App 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="#" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={img4} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={img4}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Card 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="#" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={img5} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={img5}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Web 2"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="#" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={img6} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={img6}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="App 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="#" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={img7} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={img7}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Card 1"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="#" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={img8} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={img8}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Card 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="#" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={img9} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={img9}
                  data-gall="portfolioGallery"
                  className="venobox"
                  title="Web 3"
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="#" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
