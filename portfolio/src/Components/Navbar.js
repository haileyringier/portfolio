import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";


export default function Navbar() {

  return (
    <div >
      <AppBar position='static' >
        <Link to='/resume'>Resume</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
      </AppBar>
    </div>
  );
}
