import {useState,useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import VILLAGE from '../../VILLAGE-LOGO.svg';
import NavbarBackend from "../../components/backend/NavbarBackend";
import "../../styles/Login.css";
 

function LoginPage() {
  const history = useHistory();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  // PostForm Login
  const SubmitForm = async (e) => {
    try {
    e.preventDefault();
    const respProfile = await axios.post(`${process.env.REACT_APP_API_PROD}/login.php`,JSON.stringify({
      username,password
    }))
    console.log(respProfile);
    if(await respProfile.data[0].Message.status === 1){
        console.log(respProfile.data[0].Message);
        localStorage.setItem("profile",JSON.stringify(respProfile.data[0].Message.result));
        history.replace("/backend/main")
    } else {
        console.log(respProfile.data[0].Message);
        setErrorMsg(respProfile.data[0].Message.message)
    } 
    
  } catch (error) {
    console.log(error);
  }
  };

// Check Login
  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem("profile"))
    if (profileValue) {
      history.replace("/backend/main")
    } 
  }
  useEffect(() => {
    getProfile()
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

return (
<>
 <NavbarBackend />
<div className="col-lg-3 mx-auto p-3 py-md-5">
  <form onSubmit={SubmitForm}>
    <center><img className="mb-4 " src={VILLAGE} alt="..." width="90"  /></center>
    <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

    <div className="form-floating mt-1 mb-1">
      <input type="text" name='username' value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control " />
      <label htmlFor="floatingInput">username</label>
    </div>
    <div className="form-floating">
      <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"  />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <p class="text-danger text-start p-2">{errorMsg}</p>

    <button className="w-100 btn btn-lg btn-primary border-0" type="submit">Sign in</button>
  </form>
</div>
    </>
  );
}
  
export default LoginPage;
