import { useState } from "react";
import "../styles/EnquiriesComponent.css"
import '../App.css'
import axios from "axios";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
const schema = yup.object({
  name:  yup.string().required('ค่าห้ามว่าง'),
  email: yup.string().required('ค่าห้ามว่าง').email('ค่าที่ป้อนไม่ตรงกับรูปแบบอีเมล'),
  telephone: yup.string().required('ค่าห้ามว่าง').matches(phoneRegExp, 'ค่าที่ป้อนไม่ตรงกับรูปแบบหมายเลขโทรศัพท์'),
  company: yup.string()

}).required();

function EnquiriesComponent() {
  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [form,setForm] = useState({
    name:"",
    email:"",
    telephone:"",
    company:"",
    location: "",
    area:"",
    special:""
  })
  const{name,email,telephone,company,location,area,special} = form

  const [check, setCheck] = useState({class : "disabled" , att : true})

  const inputValue = name => event => {
    setForm({...form,[name]:event.target.value})
  }

  const onSubmitForm = async (event) => {
     await axios.post(`${process.env.REACT_APP_API_PROD}/index.php`,form)
     .then(function(response){
      console.log(response.data);
      history.go(0)
     }).catch(function(error) {
      console.log(error);
     })

  }  
  const onChangeCheck =(e) => {
    let checked = e.target.checked
    if(checked === true){
      setCheck({class : "" , att : false})
    } else {
      setCheck({class : "disabled" , att : true})

    }

  }
    return (
    <>
    <div className="container mt-5 mb-5">
    <div className="row" data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
      <div className="col-lg-5 text-start" id="section_1">
      <h1 className="text-start mb-4 title-enquiries">CONTACT</h1>

        <div>
        <p className="fs-4 sub-title">DEVELOPER</p>
        <p>Gaysorn Property<br/>
          4th Floor, Gaysorn Building<br/>
          999 Ploenchit Road, Lumpini,<br/>
          Pathumwan, Bangkok 10330 Thailand</p>
        </div>
        <div className="mt-4">
          <h5 className="text-start sub-title">WORKSTYLES<br/>
           OFFICE LEASING ENQUIRIES</h5>
          <ul className="list-group">
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
            <i className="bi bi-telephone Icon-TankardGray" ></i><span className="ms-3">(+66)2 612 5998</span>
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2"> 
            <i className="bi bi-envelope-fill Icon-TankardGray"></i><span className="ms-3">workstyles@gaysorngroup.com</span>
          </li>
          <li className="list-group-item bg-transparent border-0 p-0 mb-2">
           <i className="bi bi-facebook Icon-TankardGray"></i><a href=" https://www.facebook.com/Gaysorn.WorkStyles"><span className="ms-3">www.facebook.com/Gaysorn.WorkStyles</span></a>
          </li>
        </ul>
        </div>
    </div>
    <div className="col-lg-2">
    </div>

      <div className="col-md-10 col-lg-5">
      <h1 className="text-start title-enquiries mb-3">ENQUIRIES</h1>

      <p className="mb-4">Simply fill out the form for your leasing enquiries and we’ll get back<br/>
      to your shortly.</p>


      <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="row align-items-center mb-1">
       <label className="col-sm-3 col-form-label">Your Name*</label>
        <div className="col-sm-9">
         <input id="name"
          {...register("name")}
          value={name} 
          onChange={inputValue('name')}
          className="form-control rounded-0"
          type="text"
          />
        {errors.name && <span className="text-danger bw-bold" role="alert">{errors.name.message}</span>}

        </div>
      </div>
      <div className="row align-items-center mb-1">
       <label className="col-sm-3 col-form-label">Your Email*</label>
        <div className="col-sm-9">

        <input id="email"
        {...register("email")}
        value={email} 
        onChange={inputValue('email')}
        className="form-control rounded-0"
        type="text" 
        />
       {errors.email && <span className="text-danger bw-bold" role="alert">{errors.email.message}</span>}

        </div>
      </div>
      <div className="row align-items-center mb-1">
       <label className="col-sm-3 col-form-label">Telephone*</label>
        <div className="col-sm-9">

        <input id="phone"
        {...register("telephone")}
        value={telephone} 
        onChange={inputValue('telephone')}
        className="form-control rounded-0"
        type="tel" 
        />
        {errors.telephone && <span className="text-danger bw-bold" role="alert">{errors.telephone.message}</span>}

        </div>
      </div>
      <div className="row align-items-center mb-1">
       <label className="col-sm-3 col-form-label">Company name</label>
        <div className="col-sm-9">

        <input id="company"
        {...register("company")}
        value={company} 
        onChange={inputValue('company')}
        className="form-control rounded-0"
        type="text" 
        />

        </div>
      </div>

      <div className="row align-items-center mb-1">
      <label className="col-sm-3 col-form-label">Choose Location</label>
      <div className="col-sm-9">
       <select 
        value={location} 
        onChange={inputValue('location')}
       className="form-select rounded-0" 
       defaultValue="" 
       style={{color: "#817b6e",border:"1px solid #bcaa98"}} 
       aria-label="Default select example">
        <option value="" disabled>Choose Location</option>
        <option className="GAYSORN TOWER" value="GAYSORN TOWER">GAYSORN TOWER</option>
        <option className="GAYSORN CENTER" value="GAYSORN CENTER">GAYSORN CENTRE</option>
        <option className="GAYSORN AMARIN" value="GAYSORN AMARIN">GAYSORN AMARIN</option>
       </select>
      </div>
      </div>

      <div className="row align-items-center mb-1">
       <label className="col-sm-3 col-form-label">Area Require</label>
        <div className="col-sm-9">

        <input id="area"  
        {...register("area")}
        value={area} 
        onChange={inputValue('area')}
        className="form-control rounded-0"
        type="number"
        placeholder="Sq.m."
        />

        </div>
      </div>
      <div className="row align-items-center mb-3">
       <label className="col-sm-3 col-form-label">Special Enquiries</label>
        <div className="col-sm-9">

         <input id="special"
          {...register("special")} 
          value={special} 
          onChange={inputValue('special')}
         className="form-control rounded-0" 
         type="text" 
         />

        </div>
      </div>

      <div className="col-12">
       <div className="form-check">
        <input className="form-check-input rounded-0" type="checkbox" onChange={onChangeCheck} id="invalidCheck2" />
        <label className="form-check-label" htmlFor="invalidCheck2">
         I agree to have this website store my submitted information<br/>
         to receive a response to my enquiry.
        </label>
       </div>
      </div>

      <div className="d-grid gap-2 mt-4">
       <input type="submit" className={`btn-explore  ${check.class}`} disabled={check.att} value="E N Q U I R E" />
      </div>
     </form>

      </div>

    </div>
  </div>
    </>
    );
  }
  
export default EnquiriesComponent;