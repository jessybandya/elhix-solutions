import React, { useState, useEffect, useRef, useContext } from "react";

// react-router components
import { useLocation, Link, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux'

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "../../../components/SoftBox";
import SoftTypography from "../../../components/SoftTypography";
import SoftInput from "../../../components/SoftInput";

// Soft UI Dashboard React examples
import Breadcrumbs from "../../../examples/Breadcrumbs";
import NotificationItem from "../../../examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "./styles";

// Soft UI Dashboard React context
import {
  useSoftUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "../../../context";
import {Button,Modal} from 'react-bootstrap';
// Images
import team2 from "../../../assets/images/team-2.jpg";
import logoSpotify from "../../../assets/images/small-logos/logo-spotify.svg";
import { auth, db } from "../../../auth/firebase";
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { updateAuthId } from "../../../auth/redux/dataSlice";
import StarIcon from '@mui/icons-material/Star';
import swal from "@sweetalert/with-react";
import { toast } from "react-toastify";
import { Divider, Rating } from "@mui/material";
import { SendOutlined } from "@mui/icons-material";
import { Input } from 'antd';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import WebIcon from '@material-ui/icons/Web';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp';
import BusinessSharpIcon from '@material-ui/icons/BusinessSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import ContactPhoneSharpIcon from '@material-ui/icons/ContactPhoneSharp';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import WorkIcon from '@material-ui/icons/Work';
import BookIcon from '@material-ui/icons/Book';
import { CSSTransition } from 'react-transition-group';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import TelegramIcon from '@mui/icons-material/Telegram';
import Swal from "sweetalert2";


const { TextArea } = Input;

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}



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


function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const authId = useSelector((state) => state.authId);
  const history = useNavigate("")
  const dispatch1 = useDispatch();
  const [aboutModal, setAboutModal] = React.useState(false);
  const [contactModal, setContactModal] = React.useState(false);
   const theme = useTheme();
    const [value, setValue] = React.useState(0);

     const [modalShow, setModalShow] = React.useState(false);
     const [modalShowAuth, setModalShowAuth] = React.useState(false);
    const [currentUser, setCurrentUser] = useState(``)
    const [submitComment, setSubmitComment] = useState('')
    const [value1, setValue1] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [posts, setPosts] = React.useState([])


  React.useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      unsub();
      if (user) {
        db.collection('users').doc(`${user?.uid}`).onSnapshot((doc) => {
          setCurrentUser(doc.data());
        });
      } else {
        // not logged in
      }
    });
  }, []);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
  
  //   return (
  //     <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
 

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);



  
  const logout = () => {
    auth.signOut();
    history("/admin-page")
    dispatch1(updateAuthId(''))
    Swal.fire({
      icon: "success",
      title: "Logged Out Successfully",
      text: "You have been logged out successfully as Admin",
      showConfirmButton: false,
      timer: 2000,
    })    
}



const date = new Date;
let hours = date.getHours();
let status = (hours < 12)? "Good Morning" : (hours >= 12 && hours < 16)? "Good Afternoon" : (hours >= 16 && hours < 19)? "Good Evening" : (hours >= 19 && hours < 12)? "Good Night" : ((hours <= 12 && hours >= 12 ) ? "Good Morning" : "Good Night");
function abbrNum(number, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10,decPlaces);

  // Enumerate number abbreviations
  var abbrev = [ "K", "M", "B", "T" ];

  // Go through the array backwards, so we do the largest first
  for (var i=abbrev.length-1; i>=0; i--) {

      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10,(i+1)*3);

      // If the number is bigger or equal do the abbreviation
      if(size <= number) {
           // Here, we multiply by decPlaces, round, and then divide by decPlaces.
           // This gives us nice rounding to a particular decimal place.
           number = Math.round(number*decPlaces/size)/decPlaces;

           // Add the letter for the abbreviation
           number += abbrev[i];

           // We are done... stop
           break;
      }
  }

  return number;
}

  return (
    <>
    <AppBar
    style={{zIndex:10}}
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
      className='container'
    >
      <Toolbar sx={(theme) => navbarContainer(theme)} style={{display:'flex'}}>
        <SoftBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </SoftBox>
       
          <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
            {authId ?(
              <>
          
             {authId === 'YbhqDf8cnXRX07wVkNDdonpiBai2' &&(
              <SoftTypography
              variant="button"
              sx={({ palette: { dark, white } }) => ({
                color: light ? white.main : dark.main,
              })}
              fontWeight="medium"
              color={light ? "white" : "dark"}
            >
              <PowerSettingsNewIcon               className="Header-Navabar"
              fontSize="medium" onClick={logout} style={{cursor:'pointer',color:'#2152ff'}}/>
            </SoftTypography>
             )}
              </>
            ):(
              <>
              </>
            )}

          </SoftBox>
      </Toolbar>
    </AppBar>

    </>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
