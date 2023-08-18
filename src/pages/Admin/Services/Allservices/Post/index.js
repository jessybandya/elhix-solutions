import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { db, storage as storage2 } from '../../../../../auth/firebase';
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CloseIcon from '@mui/icons-material/Close';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import Gallery from './Gallery'
import { Avatar, Card, Fab, FormControl, ImageListItem, MenuItem, Select } from '@mui/material'
import { Add, CheckCircleOutline } from '@mui/icons-material'; 
import firebase from 'firebase'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import SoftBox from '../../../../../components/SoftBox';
import SoftInput from '../../../../../components/SoftInput';
import SoftButton from '../../../../../components/SoftButton';
import SoftTypography from '../../../../../components/SoftTypography';
import { Input } from 'antd';
import axios from 'axios'
import Gallery from './Gallery';



const { TextArea } = Input;


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const theme = createTheme();

function Post({
name, descriptions, serviceID, images, timestamp
}) {
  const [open, setOpen] = React.useState(false);
  const [name1, setName] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = React.useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const theme = useTheme();


  const handleClose2 = () =>{
    setModalShow(false)
  }

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = ( name, descriptions) => {
    setOpen(true);
    setName(name)
    setDescription(descriptions)
  }
  const handleClose3 = () => {
    setOpen(false);
  };

  const UpdateFun = () =>{
    try{
      // Set the "capital" field of the city 'DC'
db.collection("services").doc(serviceID).update({
title: name1,
descriptions: description
})
toast.success("Successfully Updated!",{
  position: toast.POSITION.TOP_CENTER
})
    }catch(error){
      toast.error("Error @Updating: ",error.message)
    }
}
  // const [isOpen, setIsOpen] = useState(false);
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [openBackdrop, setOpenBackdrop] = React.useState(false);
  // const [name, setName] = useState('')
  // const [modalShow, setModalShow] = React.useState(false);

  // const handleCloseBackdrop = () => {
  //   setOpenBackdrop(false);
  // };
  // const handleOpenBackdrop = () => {
  //   setOpenBackdrop(true);
  // };

  // const handleImageClick = () => {
  //   setIsOpen(true);
  // };

  // const handleLightboxClose = () => {
  //   setIsOpen(false);
  // };
  // var d = timestamp;
  // //var d =val.timestamp;

  // //NB: use + before variable name
  // var date = new Date(+d);

  // const openModal = (name) => {
  //   setName(name)
  //   setModalShow(true)
  // }

  const [files, setFiles] = useState([]);

  const onFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const selectedComments = selectedFiles.map(() => "");
    setFiles(selectedFiles);
  };



  const onDelete = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);

    setFiles(updatedFiles);
  };

  const onUpload = async () => {
    if (files.length === 0) {
      toast.error("Kindly add images!");
    } else {
      const storageRef = storage2.ref("electronics-images");
      const imageUploadPromises = files.map(async (file, index) => {
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        return {
          name: file.name,
          url: await fileRef.getDownloadURL(),
          timestamp: Date.now(),
          comment: name,
        };
      });

      const uploadedImages = await Promise.all(imageUploadPromises);

      db.collection("services")
        .doc(serviceID)
        .update({
          images: firebase.firestore.FieldValue.arrayUnion(...uploadedImages),
        });
        setFiles([])
      toast.success("Successfully uploaded photos...");
    }
  };


  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${name}" ?`);

    if (confirmDelete) {
      try {
        await db.collection('services').doc(serviceID).delete();
        toast.success('Service deleted successfully!',{
          position: toast.POSITION.TOP_CENTER
        });
      } catch (error) {
        toast.error('Error deleting document:', error);
      }
    }
  };


  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell align="right">{images.length}</TableCell>
      <TableCell align="right"><EditIcon fontSize="medium" onClick={() => handleClickOpen(name,descriptions)} style={{cursor:'pointer',color:'#2a68af',marginRight:5}}/>  <DeleteForeverIcon onClick={handleDelete} fontSize="medium" style={{cursor:'pointer',color:'#2a68af'}}/></TableCell>


      <Dialog
fullScreen
open={open}
onClose={handleClose3}
TransitionComponent={Transition}
sx={{ zIndex: 1000}}
>
<AppBar style={{backgroundColor:'#2a68af'}} sx={{ position: 'fixed' }}>
  <Toolbar>
    <IconButton
      edge="start"
      color="inherit"
      onClick={handleClose3}
      aria-label="close"
    >
      <CloseIcon style={{color:"#fff"}}/>
    </IconButton>
    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
    
  </Typography>
    <Button style={{backgroundColor:'#fff',border:'1px solid #2a68af', color:'#2a68af'}} autoFocus onClick={handleClose3}>
      Close
    </Button>
  </Toolbar>

  <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="secondary"
    textColor="inherit"
    variant="fullWidth"
    aria-label="full width tabs example"
    style={{backgroundColor:'#fff'}}
  >
    <Tab label={`Description`} {...a11yProps(0)} />
    <Tab label="Gallery" {...a11yProps(1)} />
  </Tabs>
</AppBar>
<List style={{marginTop:120}}>
<Box sx={{ bgcolor: 'background.paper' }}>
<SwipeableViews
  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  index={value}
  onChangeIndex={handleChangeIndex}
>
  <TabPanel value={value} index={0} dir={theme.direction}>
  <Card>
  <SoftBox pt={0} pb={3} px={3}>
    <SoftBox component="form" role="form">
    <SoftBox style={{display:'flex'}} mb={2}>
    <SoftInput
    value={name1}
    type="text"
    onChange={e => setName(e.target.value)}
    placeholder="Title" />

  </SoftBox>

  <SoftBox mb={2}>
  <TextArea 
  rows={6}
value={description}
type="text"
onChange={e => setDescription(e.target.value)}
placeholder="Wins" 
/>
  </SoftBox>



<SoftButton onClick={UpdateFun} style={{backgroundColor:'#2152ff',color:'#fff'}} fullWidth>
Update
</SoftButton>
    </SoftBox>
  </SoftBox>

  </Card>
   </TabPanel>
  <TabPanel value={value} index={1} dir={theme.direction}>
  <center style={{marginTop:-20}}>     
  <Fab onClick={() => setModalShow(true)} color="primary" aria-label="add" style={{backgroundColor:'#2a68af'}}>
  <Add fontSize="large" />
</Fab>
</center>
  <Gallery images={images} serviceID={serviceID} />
</TabPanel>
</SwipeableViews>
</Box>
</List>
</Dialog>



<Modal
    show={modalShow}
    onHide={handleClose2}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
      <center><b><h4 style={{fontWeight:'bold'}}>UPLOAD IMAGES</h4></b></center>
      <div>
      <input type="file" multiple onChange={onFileChange} />
      <div>
        {files.map((file, index) => (
          <div key={index}>
            <img src={URL.createObjectURL(file)} alt={`Image ${index}`} width="100" />
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={onUpload}>Upload</button>
    </div>

    </Modal.Body>
  </Modal>
    </TableRow>
  );
}

export default Post;
