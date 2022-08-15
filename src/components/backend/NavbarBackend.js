import WORKSTYLES from '../../WORKSTYLES-LOGO.svg';
import { Link,useHistory } from "react-router-dom"
import {useState,useEffect} from "react";

function NavbarBackend() {
  const [profile, setProfile] = useState(null)

// Check Login
const getProfile = () => {

    const profileValue = JSON.parse(localStorage.getItem("profile"))
    if (profileValue) {
      setProfile(profileValue)
    } 
  }
  useEffect(() => {
    getProfile()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("profile");
    history.replace("/backend/login");
  };

return (
<>
 <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">

  <div class="navbar-brand p-3 ms-5" href="#">  
   <img  src={WORKSTYLES} alt="..." width="120"  />
  </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
      {
        profile && (
        <li className="nav-item">
        <Link to="/backend/main" className="nav-link">หน้าหลัก</Link>
        </li>     
        )
      }

    </ul>
    {
      profile && (
        <button className="btn btn-danger me-5 rounded-0" onClick={logout}>ออกจากระบบ</button>
      )
      }
    </div>
  </div>
</nav> 



        </>
      );
    }
    
export default NavbarBackend;