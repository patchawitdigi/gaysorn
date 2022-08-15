import {useState,useEffect} from "react";
import { useParams,useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import NavbarBackend from "../../components/backend/NavbarBackend";
function DetailEnquiries() {
  const history = useHistory();// eslint-disable-next-line
  const [profile, setProfile] = useState(null)
  const [inputs, setInputs] = useState([]);

  const {id} = useParams();

  
  useEffect(() => {
    getDetail();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

 async function getDetail() {
   await axios.get(`${process.env.REACT_APP_API_PROD}/index.php/${id}`)
   .then(function(response) {
    console.log(response.data);
      setInputs(response.data)
    }).catch(function(error){
      console.log(error);
    })
  }



  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem("profile"))
    if (profileValue) {
        setProfile(profileValue);
    } else {
        history.replace("/backend/login")
    }
  }

  useEffect(() => {
    getProfile() 
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
        <NavbarBackend />
        <div className="container">
        <div class="shadow p-3 mt-5 mb-5 bg-body rounded row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
      </div>
      <div class="col-md-7 col-lg-8">
       <div class="d-flex h3 pb-2 mb-4 text-dark border-bottom border-dark">
        <div>Enquiries Detail</div>
        <div class="ms-auto align-text-bottom">
        <Link to="/backend/main" class="nav-link text-primary fs-6">ย้อนกลับ</Link>
        </div>

       </div>

          <div class="row mb-5 g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Name</label>
              <input  value={inputs.name} class="form-control" readOnly/>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Email</label>
              <input value={inputs.email} class="form-control" readOnly/>
            </div>

            <div class="col-sm-8">
              <label for="firstName" class="form-label">company</label>
              <input value={inputs.company} class="form-control" readOnly/>
            </div>

            <div class="col-sm-4">
              <label for="lastName" class="form-label">telephone</label>
              <input value={inputs.telephone} class="form-control" readOnly/>
            </div>

            <div class="col-sm-6">
              <label for="firstName" class="form-label">location</label>
              <input value={inputs.location} class="form-control" readOnly/>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">area</label>
              <input value={inputs.area} class="form-control" readOnly/>
            </div>


            <div class="col-sm-8">
              <label for="lastName" class="form-label">special</label>
              <input value={inputs.special} class="form-control" readOnly/>
            </div>

            <div class="col-sm-4">
              <label for="lastName" class="form-label">special</label>
              <input value={inputs.create_date} class="form-control" readOnly/>
            </div>

          </div>
          
    </div>
    </div>
    </div>

        </>
    );
}

export default DetailEnquiries;