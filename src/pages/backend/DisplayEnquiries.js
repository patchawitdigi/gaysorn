import { useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";
import NavbarBackend from "../../components/backend/NavbarBackend";

function DisplayEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [profile, setProfile] = useState(null)
  const history = useHistory();

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

  async function getEnquiries() {
      await axios.get(`${process.env.REACT_APP_API_PROD}/index.php`).then(function(response) {
            console.log(response.data);
            setEnquiries(response.data);
        });
      }
  useEffect(() => {
    getEnquiries();
  }, []);

  const columns = [
      {
        id: 1,
        name: "name",
        selector: (row) => row.name,
        sortable: true,
        reorder: true
      },
      {
        id: 2,
        name: "email",
        selector: (row) => row.email,
        sortable: true,
        reorder: true
      },
      {
        id: 3,
        name: "telephone",
        selector: (row) => row.telephone,
        sortable: true,
        reorder: true
      },
      {
        id: 4,
        name: "company",
        selector: (row) => row.company,
        sortable: true,
        reorder: true
      },
      {
        id: 5,
        name: "create_date",
        selector: (row) => row.create_date,
        sortable: true,
        reorder: true
      },
      {
        id: 6,
        selector: (row) => <Link to={"/backend/detail/" + row.id} class="nav-link text-primary">ดูรายละเอียด</Link>,
        sortable: true,
        reorder: true
      },
    ];

    const customStyles = {
      title: {
        style: {
          fontColor: 'red',
          fontWeight: '900',
        }
      },
      rows: {
        style: {
          fontSize: '18px',
        }
      },
      headCells: {
        style: {
          fontSize: '20px',
          fontWeight: '500',
          textTransform: 'uppercase',
          paddingLeft: '0 8px'
        },
      },
      cells: {
        style: {
          fontSize: '17px',
          paddingLeft: '0 8px',
        },
      },
    };

return (
   <>
   <NavbarBackend/>
   <div className="container">
   <div class="shadow p-3 mt-5 mb-5 bg-body rounded">  
   <div class="h3 p-3 pb-2 mb-2 text-dark border-bottom border-dark">
     Enquiries
   </div>
   <DataTable
      columns={columns}
      data={enquiries}
      defaultSortFieldId={1}
      customStyles={customStyles}

      pagination
      selectableRows
    />

   </div>
    </div>
   </>

);
}

export default DisplayEnquiries;
