import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Button,Modal } from 'react-bootstrap';
import Allmembers from './Allservices';
import SoftTypography from '../../../soft-components/SoftTypography';
import ClearIcon from '@mui/icons-material/Clear';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import DownloadIcon from '@mui/icons-material/Download';
import { db } from '../../../auth/firebase';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Swal from 'sweetalert2';
import AddService from './AddService';

function Services() {
  const [modalShow, setModalShow] = React.useState(false);
  const [posts1, setPosts1] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const [linksData, setLinksData] = React.useState();
  


  // Fetch data from Firebase Firestore and update `posts1` state
  React.useEffect(() => {
    db.collection('services').onSnapshot((snapshot) => {
      setPosts1(snapshot.docs.map((doc) => doc.data()))
    });
  }, []);
  
  // Filter posts based on `searchTerm`
  React.useEffect(() => {
    if (posts1 !== undefined) {
      const finalPosts = posts1.filter((res) => {
        return res?.title?.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      });
      setFilteredPosts(finalPosts);
    }
  }, [searchTerm, posts1]);
  
  const updateSearchResults = (e) => {
    setSearchTerm(e.target.value);
  };




  
  return (
    <SoftTypography>
    <div>
    <Paper
    component="form"
    sx={{ display: 'flex', alignItems: 'center'}}
  >
  <IconButton type="button" sx={{ p: '10px' }} aria-label="pdf">
  <DownloadIcon onClick={() => Swal.fire({icon:'info',title:'Feature Update',text:'Shall work very soon...'})} style={{color:'#2a68af'}}/>
</IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      onChange={updateSearchResults}
      placeholder="Search service by name..."
    />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>

    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />  

    <IconButton type="button" sx={{ p: '10px' }} aria-label="pdf">
    <DriveFolderUploadIcon onClick={() => setModalShow(true)} style={{color:'#2a68af',cursor:'pointer'}}/>
  </IconButton>
  </Paper>  
  
  <Allmembers filteredPosts={filteredPosts} searchTerm={searchTerm}/>
    </div>

    <Modal 
    show={modalShow}
    onHide={() => setModalShow(false)}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Upload Services
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <AddService setModalShow={setModalShow}/>
    </Modal.Body>
    </Modal>
    </SoftTypography>
  )
}

export default Services