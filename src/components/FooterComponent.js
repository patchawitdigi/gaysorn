import '../App.css'

function FooterComponent() {
    return (
    <>
    <footer className="d-flex flex-wrap justify-content-around align-items-center py-3" style={{backgroundColor: "#8c734b"}}>
    <div className="col-md-4 d-flex align-items-center">
      <span className="text-white">2020 Gaysorn Group,ALL RIGHTS RESERVED.</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a href=" https://www.facebook.com/Gaysorn.WorkStyles"><span className="bi bi-facebook text-white" style={{fontSize: 30}}></span></a></li>
    </ul>
    </footer>
    </>
    );
  }
  
  export default FooterComponent;
