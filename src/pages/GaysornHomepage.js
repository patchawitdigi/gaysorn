import "../styles/GaysornGeneral.css"
import "../styles/GaysornHomepage.css"
import '../App.css'
import { useEffect } from "react"
import {Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import EnquiriesComponent from "../components/EnquiriesComponent";

function GaysornHomepage() {
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
      <img src="images/01-HOME/BANNER-07.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/01-HOME/BANNER-07.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/01-HOME/BANNER-07.jpg" className="d-block w-100" alt="..." />
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
    </section>

    <section className="Content-Innovation" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50">
    <div className="px-4 pt-5 my-5 text-center border-0">
    <div className="container">
    <div className="row">
    <div className="col-md-5">
{/*      <p>{t('Thanks.1')}</p>  <p>{t('Why.1')}</p> 
 */} 

    <h1 className="Color-TankardGray text-start fw-normal" dangerouslySetInnerHTML={{__html: t('GaysornHome.Innovation.title')}}></h1>
    </div>
    <div className="col-md-2">
    </div>
    <div className="col-md-5">
    <p className="Innovation-content text-start fw-semibold" dangerouslySetInnerHTML={{__html: t('GaysornHome.Innovation.content')}}></p> 
    </div>
  </div>
  </div>
  </div>
  </section>

  <section className="Content-OurStory" >
  <div className="px-4 pt-5 my-5 text-start p-5 border-0 bg-opacity-10">
  <div className="container">

    <div className="row">
    <div className="col-md-4 text-star text-white" data-aos="fadeInUp">
    <h1 className="text-start fw-normal" dangerouslySetInnerHTML={{__html: t('GaysornHome.Ourstory.title')}}></h1>
    <p className="Ourstory-content" dangerouslySetInnerHTML={{__html: t('GaysornHome.Ourstory.content')}}></p>
    </div>

    <div className="col-md-8">
    <img src="images/01-HOME/THUMBNAILVDO.jpg" data-bs-toggle="modal" data-bs-target="#ModalOurStory" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="900" loading="lazy" />
    </div>

    {/* modal VIDEO*/}
<div className="modal fade" id="ModalOurStory" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content ratio ratio-1x1">
    <iframe id="Amarin-ModalVideo" src="https://www.youtube.com/embed/OjJBZGEvILk" title="YouTube video" allowFullScreen></iframe>
    </div>
  </div>
</div>
  </div>
  </div>
  </div>
  </section>


{/* Content-Office */}
<section className="Content-Office mb-5" >

<div className="container col-xxl-12 mb-4" data-aos="fadeInUp">
    <div className="row">
      <div className="col-10 col-sm-8 col-lg-5">
      <h1 className="text-start Color-Pablo">OUR<br/>
        GAYSORN WORKSTYLES<br/>
         OFFICE COMMUNITY</h1>
      </div>
      <div className="col-lg-5">
      </div>
    </div>
</div>

<div className="container col-xxl-12 mb-5" data-aos="fadeInUp">
    <div className="row flex-lg-row-reverse align-items-center">
        <img src="images/01-HOME/GAYSORN TOWER.jpg" className="col-10 col-sm-8 col-lg-7 d-block mx-lg-auto img-fluid mb-3" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      <div className="col-lg-5 text-start">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient text-white fs-2 mb-3">
         <img src="images/01-HOME/LOGO-10.png" width="175" height="57" className=" mx-auto float-start" alt="..." />       
        </div>
        <p className="fw-semibold" dangerouslySetInnerHTML={{__html: t('GaysornHome.OFFICECOMMUNITY.content-tower')}}></p>
        <Link  to="/tower" ><button className="btn-exploremore float-start">EXPLORE MORE</button></Link>
      </div>
    </div>
</div>

<div className="container col-xxl-12 mb-5" data-aos="fadeInUp">
    <div className="row flex-lg-row-reverse align-items-center">
        <img src="images/01-HOME/GAYSORN CENTER.jpg" className="col-10 col-sm-8 col-lg-7 d-block mx-lg-auto img-fluid mb-3" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      <div className="col-lg-5 text-start">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient text-white fs-2 mb-3">
        <img src="images/01-HOME/LOGO-11.png" width="175" height="57" className=" mx-auto float-start" alt="..." />       
      </div>
        <p className="fw-semibold" dangerouslySetInnerHTML={{__html: t('GaysornHome.OFFICECOMMUNITY.content-center')}}></p>
       <Link  to="/center" ><button className="btn-exploremore float-start">EXPLORE MORE</button></Link>
      </div>
    </div>
</div>

<div className="container col-xxl-12 mb-5" data-aos="fadeInUp">
    <div className="row flex-lg-row-reverse align-items-center">
        <img src="images/01-HOME/GAYSORN AMARIN.jpg" className="col-10 col-sm-8 col-lg-7 d-block mx-lg-auto img-fluid mb-3" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      <div className="col-lg-5 text-start">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient text-white fs-2 mb-3">
        <img src="images/01-HOME/LOGO-12.png" width="175" height="57" className=" mx-auto float-start" alt="..." />
      </div>
        <p className="fw-semibold" dangerouslySetInnerHTML={{__html: t('GaysornHome.OFFICECOMMUNITY.content-amarin')}}></p>
       <Link  to="/amarin" ><button className="btn-exploremore float-start">EXPLORE MORE</button></Link>
      </div>
    </div>
</div>
</section> 
{/* Content-Office */}



  <section className="Content-Location" data-aos="fade-up-right">
   <div className="jumbotron">
   <div className="container-fluid">
    <div className="row p-5">
    <div className="col-md-5">
    <h1 className="Color-Grullo fw-semibold text-center mt-5">LOCATION</h1>
    </div>
    <div className="col-md-7">
    <p className="text-start fw-normal mt-5" dangerouslySetInnerHTML={{__html: t('GaysornHome.LOCATION1.content')}}></p>
    </div>
    </div>
   </div>
   </div>
  </section>



<section className="Content-Location2 container-fluid bg-location2" data-aos="fade-up">  
<div className="row">
    <div className="d-block d-md col-lg-10">
    <img src="images/01-HOME/LOCATION2.jpg" className="mw-100 img-fluid" alt="" />
    </div>
    <div className="col-lg-2">
    <div className="text-start text-white location2-text mt-5">
    <p className="d-flex gap-2 align-items-center "><span className="d-inline-block rounded-circle" style={{backgroundColor: "#403134",height: "20px",width: "20px"}} ></span><span className="align-baseline">GAYSORN VILLAGE</span></p>
    <p>
    1 . GAYSORN CENTRE<br/>
    2 . GAYSORN TOWER<br/>
    3 . GAYSORN AMARIN<br/>
    </p>

    <p className="d-flex gap-2 align-items-center"><span className="d-inline-block rounded-circle" style={{backgroundColor: "#6c000d",height: "20px",width: "20px"}} ></span><span className="align-baseline">2 MINS</span><br/></p>
    <p>
    4 . CENTRAL WORLD<br/>
    5 . INTERCONTINENTAL BANGKOK HOTEL<br/>
    6 . CENTARA GRAND AND BANGKOK CONVENTION CENTRE<br/>
    7 . CENTARA @ CENTRAL WORLD<br/>
    8 . ERAWAN BANGKOK<br/>
    9 . HOLIDAY INN BANGKOK HOTEL<br/>
    10 .PRESIDENT TOWER<br/>
    </p>
    <p className="d-flex gap-2 align-items-center"><span className="d-inline-block rounded-circle" style={{backgroundColor: "#053957",height: "20px",width: "20px"}} ></span><span className="align-baseline">4 MINS</span><br/></p>
    <p>
    11 .CENTRAL CHIDLOM<br/>
    12 .MANEEYA<br/>
    13 .RENAISSANCE HOTEL<br/>
    14 .WALDORF ASTORIA<br/>
    15 .PLATINUM III<br/>
    </p>
    <p className="d-flex gap-2 align-items-center"><span className="d-inline-block rounded-circle" style={{backgroundColor: "#204e15",height: "20px",width: "20px"}} ></span><span className="align-baseline">6 MINS</span><br/></p>
    <p>
    16 .THE ST. REGIS BANGKOK<br/>
    17 .ANANTARA SIAM BANGKOK HOTEL & SPA<br/>
    18 .PLATINUM I & II<br/>
    19 .CENTRAL EMBASSY<br/>
    </p>
    <button className="btn-link-google float-start mb-2">LINK TO GOOGLE MAP</button>

    </div>
    </div>
    </div>
</section>

  <section id="Enquiries-1">
  <EnquiriesComponent />
  </section>
  </div>{/* BG-Image */}

  <FooterComponent />  
  
    </>
  );
}

export default GaysornHomepage;


