import "../styles/GaysornGeneral.css";
import "../styles/GaysornAmarin.css";
import '../App.css'
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import ModalImage from "react-modal-image-react-17";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import EnquiriesComponent from "../components/EnquiriesComponent";


function GaysornAmarinpage() {
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
      <img src="images/04-GAYSORN AMARIN/Gaysorn-Amari.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/04-GAYSORN AMARIN/Gaysorn-Amari.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/04-GAYSORN AMARIN/Gaysorn-Amari.jpg" className="d-block w-100" alt="..." />
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

        <section className="Content-Amarin" data-aos="fade-up" data-aos-offset="200" data-aos-delay="100">
          <div className="px-4 pt-5 my-5 text-center border-0">
            <div className="container">
              <div className="row">
                <div className="col-md-5 p-3">
                <img src="images/01-HOME/LOGO-12.png" width="280" className=" mx-auto float-start" alt="..." />      

                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                  <p className="text-start fw-semibold mb-5" dangerouslySetInnerHTML={{__html: t('GaysornAmarin.Amarin')}}></p>
                  <button className="btn-outline tankardgray fw-bold float-start">DOWNLOAD SALE KIT</button>

                </div>
              </div>
            </div>
          </div>
        </section>{/* end-section-Content-Amarin  */}

        <section className="gaysorn-video" data-aos="fade">
        <img src="images/04-GAYSORN AMARIN/THUMBNAIL VDO-37.jpg" className="img-fluid" alt="YouTube video" data-bs-toggle="modal" data-bs-target="#ModalVideo" />
        </section>{/* end-section-gaysorn-video  */}


    <section className="two-btn-amarin p-5 mt-4 mb-4">
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
           <button className="btn-outline tankardgray fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">AMARIN VIRTUAL TOUR</button>
           <button className="btn-outline tankardgray fw-bold" data-bs-toggle="modal" data-bs-target="#ModalVideo">AMARIN VIDEO</button>
         </div>



{/* modal VIDEO*/}
<div className="modal fade" id="ModalVideo" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content ratio ratio-1x1">
    <iframe id="Amarin-ModalVideo" src="https://www.youtube.com/embed/62dB39vPF5M" title="YouTube video" allowFullScreen></iframe>
    </div>
  </div>
</div>
{/* modal VIRTUAL */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div className="container d-grid gap-5 d-md-flex justify-content-end">
  <button type="button" className="btn btn-light rounded-circle" data-bs-dismiss="modal" data-bs-target="#my-modal" aria-label="Close"><i className="bi bi-x-lg fs-4"></i></button>
  </div>
  <div className="modal-dialog modal-xl ">
    <iframe title="iframe-amarin" className="modal-content rounded-0" style={{width: "100%", height: "600px", border: "none"}} scrolling="no"
      allowFullScreen allow="gyroscope; accelerometer; xr-spatial-tracking; vr;"src=" https://hdcontent.online/amarin/">
    </iframe>
  </div>
</div>
</section>{/* end-section-two-btn-amarin  */}


<section className="Content-FloorPlans mb-3">
<div className="container col-xxl-8 py-5 border-0 bg-opacity-10">
<div className="row">

  <div class="col-5 d-flex align-items-start flex-column" data-aos="flip-left">
  <div class="mb-auto">  
  <h1 className="display-6 lh-1 mb-5 text-white">OFFICE<br/> FLOOR PLANS</h1>
  </div>
  <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
  <img src="images/Compass/compass Amari.svg" className="mx-lg-auto img-fluid" alt="Bootstrap Themes" width="45" />
  </div>
  <div class="flex-grow-1 ms-3 text-white text-floorplans">
  The floor plan / unit layouts are subject to any amendments as required
       y the relevant authorities. The unit floor area(s) and dimensions are subject to final survey.
  </div>
</div>
</div>

<div className="col-7">
<img src="images/04-GAYSORN AMARIN/FLOOR PLAN-29.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="400" loading="lazy" />
</div>
</div>
  </div>
  </section>{/* end-section-Content-FloorPlans  */}


  <section className="Thumbnails-Images mb-5">
  <div className="container-fluid">
  <div className="row">
  <div className="col-md-1 col-xxl-1 img-thumbnail border-0 rounded-0">
  </div>
    <div className="col-md-2 col-xxl-2 img-thumbnail border-0 rounded-0">
          <ModalImage
            alt=""
            small="images/04-GAYSORN AMARIN/THUMBNAIL/Gaysorn Amari-30.jpg"
            medium="images/04-GAYSORN AMARIN/THUMBNAIL/Gaysorn Amari-30.jpg"
            large="images/04-GAYSORN AMARIN/ORIGINAL SIZE/20200810_WEBSITE_photos-26.jpg"
            hideDownload={true}
          />
    </div>
    <div className="col-md-2 col-xxl-2 img-thumbnail border-0 rounded-0">
          <ModalImage
            alt=""
            small="images/04-GAYSORN AMARIN/THUMBNAIL/Gaysorn Amari-31.jpg"
            medium="images/04-GAYSORN AMARIN/THUMBNAIL/Gaysorn Amari-31.jpg"
            large="images/04-GAYSORN AMARIN/ORIGINAL SIZE/20200810_WEBSITE_photos-27.jpg"
            hideDownload={true}
          />
     </div> 
    <div className="col-md-2 col-xxl-2 img-thumbnail border-0 rounded-0">
          <ModalImage
            alt=""
            small="images/04-GAYSORN AMARIN/THUMBNAIL/Gaysorn Amari-32.jpg"
            medium="images/04-GAYSORN AMARIN/THUMBNAIL/Gaysorn Amari-32.jpg"
            large="images/04-GAYSORN AMARIN/ORIGINAL SIZE/20200810_WEBSITE_photos-28.jpg"
            hideDownload={true}
          />
    </div>
    <div className="col-md-2 col-xxl-2 img-thumbnail border-0 rounded-0">
          <ModalImage
            alt=""
            small="images/04-GAYSORN AMARIN/THUMBNAIL/Gaysorn Amari-33.jpg"
            medium="images/04-GAYSORN AMARIN/THUMBNAIL/Gaysorn Amari-33.jpg"
            large="images/04-GAYSORN AMARIN/ORIGINAL SIZE/20200810_WEBSITE_photos-29.jpg"
            hideDownload={true}
          />
    </div>
    <div className="col-md-2 col-xxl-2 img-thumbnail border-0 rounded-0">
          <ModalImage
            alt=""
            small="images/04-GAYSORN AMARIN/THUMBNAIL/Gaysorn Amari-34.jpg"
            medium="images/04-GAYSORN AMARIN/THUMBNAIL/Gaysorn Amari-34.jpg"
            large="images/04-GAYSORN AMARIN/ORIGINAL SIZE/20200810_WEBSITE_photos-31.jpg"
            hideDownload={true}
          />
     </div>  
     <div className="col-md-1 col-xxl-1 img-thumbnail border-0 rounded-0">
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
  
  export default GaysornAmarinpage;