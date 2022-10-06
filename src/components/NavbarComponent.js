import { Link, NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Scrollspy from 'react-scrollspy'

import "../styles/NavbarComponent.css"
import '../App.css'
import WORKSTYLES from '../WORKSTYLES-LOGO.svg';
import VILLAGE from '../VILLAGE-LOGO.svg';

function NavbarComponent() {

  const {i18n } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
    return (
      <>
<nav className="navbar navbar-expand-lg NavbarComponent" >
<div className="container-fluid">
    <div className='col'>
    <div className="navbar-brand ms-5"> <NavLink to="/"><img src={WORKSTYLES} alt=".." height="45" /></NavLink></div>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse me-5" id="navbarResponsive">
        <Scrollspy className="navbar-nav ms-auto mt-4" items={ ['Enquiries-1'] } currentClassName="is-current">
        <li className="nav-item"><NavLink to="/tower"  className="nav-link"><span className="color-TankardGray fw-semibold">GAYSORN TOWER</span></NavLink></li>
        <li className="nav-item"><NavLink to="/center" className="nav-link"><span className="color-TankardGray fw-semibold">GAYSORN CENTRE</span></NavLink></li>
        <li className="nav-item"><NavLink to="/amarin" className="nav-link"><span className="color-TankardGray fw-semibold">GAYSORN AMARIN</span></NavLink></li>
        <li >
          <a href={"#Enquiries-1"} className="btn-enquiries me-2">ENQUIRE NOW</a>
        </li>
        { (i18n.language === 'en') ?
        <li ><div className="nav-link"><span className="badge-lan rounded-0 cursor-pointer" onClick={()=>handleClick('en')}>EN</span> / <span className="color-TankardGray cursor-pointer" onClick={()=>handleClick('th')}>TH</span></div></li>
        :
        <li ><div className="nav-link"><span onClick={()=>handleClick('en')} className="color-TankardGray cursor-pointer">EN</span> / <span className="badge-lan rounded-0 cursor-pointer" onClick={()=>handleClick('th')}>TH</span></div></li>
        }
              </Scrollspy>

        <a href="https://www.gaysornvillage.com/th/"><img className='ms-5' src={VILLAGE} alt=".." width={50}/></a>
    </div>
    </div>
</nav>

      </>
    );
  }
  
  export default NavbarComponent;