import { useTranslation } from 'react-i18next';
import '../App.css'

function FooterComponent() {
  const { i18n } = useTranslation();
    return (
    <>
    <footer className="d-flex flex-wrap justify-content-around align-items-center px-5 py-3" style={{backgroundColor: "#8c734b"}}>
    <div className="col-md-4 d-flex content-start items-start	justify-start	">
      <span className="text-white">2020 Gaysorn Group,ALL RIGHTS RESERVED.</span>
    </div>

    <div className="col-md-3 d-flex align-items-left gap-2">
      <div>
        <div><a className="text-white" target={"_blank"} href={`https://www.gaysornproperty.com/privacyPolicy`}>Privacy Policy</a></div>
        <div><a className="text-white" target={"_blank"} href={`https://www.gaysornproperty.com/privacyNoticeForCustomers`}>Privacy Notice for Customers</a></div>
        <div><a className="text-white" target={"_blank"} href={`https://www.gaysornproperty.com/privacyNoticeForPartners`}>Privacy Notice for Partners</a></div>
      </div>
    </div>
    <div className="col-md-3 d-flex align-items-left gap-2">
      <div>
        <div><a className="text-white" target={"_blank"} href={`https://www.gaysornproperty.com/terms`}>Terms and Conditions</a></div>
        <div><a className="text-white" target={"_blank"} href={`https://www.gaysornproperty.com/cookies`}>Cookies Policy</a></div>
        <div><a className="text-white" target={"_blank"} href={`https://www.gaysornproperty.com/policy`}>CCTV Policy</a></div>
      </div>
    </div>

    <ul className="nav col-md-2 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a href=" https://www.facebook.com/Gaysorn.WorkStyles"><span className="bi bi-facebook text-white" style={{fontSize: 30}}></span></a></li>
    </ul>
    </footer>
    </>
    );
  }
  
  export default FooterComponent;
