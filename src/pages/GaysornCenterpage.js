import "../styles/GaysornGeneral.css";
import '../App.css'
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import ModalImage from "react-modal-image-react-17";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import EnquiriesComponent from "../components/EnquiriesComponent";



function GaysornCenterpage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  const { t } = useTranslation();

    return (
      <>
        <NavbarComponent />
  <div className="BG-Image">

  <section className="Banner">
  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/03-GAYSORN CENTER/Gaysorn-Centre.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/03-GAYSORN CENTER/Gaysorn-Centre.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/03-GAYSORN CENTER/Gaysorn-Centre.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section>{/* end-section-banner  */}

    <section className="Content-Center" data-aos="fade-up" data-aos-offset="200" data-aos-delay="100">
          <div className="px-4 pt-5 my-5 text-center border-0">
            <div className="container">
              <div className="row">
                <div className="col-md-5 p-3">
                <img src="images/01-HOME/LOGO-11.png" width="280" className=" mx-auto float-start" alt="..." />      
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                  <p className="text-start fw-semibold mb-5" dangerouslySetInnerHTML={{__html: t('GaysornCenter.Center')}}></p>
                  <button className="btn-outline tankardgray fw-bold float-start">DOWNLOAD SALE KIT</button>

                </div>
              </div>
            </div>
          </div>
    </section>{/* end-section-Content-Center  */}


<section className="Content-FloorPlans mb-3">
<div className="container col-xxl-8 py-5 border-0 bg-opacity-10">
<div className="row">
  
  <div class="col-5 d-flex align-items-start flex-column" data-aos="flip-left">
  <div class="mb-auto">  
  <h1 className="display-6 lh-1 mb-5 text-white">OFFICE<br/> FLOOR PLANS</h1>
  </div>
  <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
  <img src="images/Compass/compass Centre.svg" className="mx-lg-auto img-fluid" alt="Bootstrap Themes" width="45" />
  </div>
  <div class="flex-grow-1 ms-3 text-white text-floorplans">
  The floor plan / unit layouts are subject to any amendments as required
       y the relevant authorities. The unit floor area(s) and dimensions are subject to final survey.
  </div>
</div>
</div>

<div className="col-7 p-5">
<img src="images/03-GAYSORN CENTER/04 AW - Gaysorn Workstyle-24.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500"loading="lazy" />
</div>
</div>
  </div>
</section>{/* end-section-Content-Center  */}


  <section className="Thumbnails-Images mb-5">
  <div className="container">
  <div className="row">
  <div className="col-sm-6 col-md-3">
   <div className="img-thumbnail border-0 rounded-0">
          <ModalImage
            alt=""
            small="images/03-GAYSORN CENTER/THUMBNAIL/Gaysorn Centre-25.jpg"
            medium="images/03-GAYSORN CENTER/THUMBNAIL/Gaysorn Centre-25.jpg"
            large="images/03-GAYSORN CENTER/ORIGINAL SIZE/20200810_WEBSITE_photos-22.jpg"
            hideDownload={true}
          />
     </div>
    </div>
    <div className="col-sm-6 col-md-3">
    <div className="img-thumbnail border-0 rounded-0">
          <ModalImage
            alt=""
            small="images/03-GAYSORN CENTER/THUMBNAIL/Gaysorn Centre-26.jpg"
            medium="images/03-GAYSORN CENTER/THUMBNAIL/Gaysorn Centre-26.jpg"
            large="images/03-GAYSORN CENTER/ORIGINAL SIZE/20200810_WEBSITE_photos-23.jpg"
            hideDownload={true}
          />
     </div>    
    </div>
    <div className="col-sm-6 col-md-3">
    <div className="img-thumbnail border-0 rounded-0">
          <ModalImage
            alt=""
            small="images/03-GAYSORN CENTER/THUMBNAIL/Gaysorn Centre-27.jpg"
            medium="images/03-GAYSORN CENTER/THUMBNAIL/Gaysorn Centre-27.jpg"
            large="images/03-GAYSORN CENTER/ORIGINAL SIZE/20200810_WEBSITE_photos-24.jpg"
            hideDownload={true}
          />
     </div>    
    </div>
    <div className="col-sm-6 col-md-3">
    <div className="img-thumbnail border-0 rounded-0">
          <ModalImage
            alt=""
            small="images/03-GAYSORN CENTER/THUMBNAIL/Gaysorn Centre-28.jpg"
            medium="images/03-GAYSORN CENTER/THUMBNAIL/Gaysorn Centre-28.jpg"
            large="images/03-GAYSORN CENTER/ORIGINAL SIZE/20200810_WEBSITE_photos-25.jpg"
            hideDownload={true}
          />
     </div>    
    </div>  
  </div>
  </div>
  </section>{/* end-section-Thumbnails-Images  */}
  
  <section id="Enquiries-1">
  <EnquiriesComponent />
  </section>
  </div>{/* BG-Image */}
  <FooterComponent />  

      </>
    );
  }
  
  export default GaysornCenterpage;