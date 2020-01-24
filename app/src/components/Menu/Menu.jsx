import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { Projects } from '../../utils/Projects';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Sky from 'react-sky';
import { useStyles } from './MenuStyle';
// import axios from 'axios';

// mini drawer component containing menu item logic
export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const topDrawer = ['Projects']; // default
  const bottomDrawer = ['All', 'Upload', 'Update', 'Delete', 'Holla']; // render components later

  // default drawer state to be closed
  const [open, setOpen] = React.useState(false);
  const [projects, setProjects] = React.useState(topDrawer);
  const [images, setImages] = React.useState(bottomDrawer);

  console.log(open, projects, images);

  const welcomeHeader = 'Vincent Nguyen';

  // drawer metbods
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const menuClickHandler = event => {
  event.preventDefault();

    // projects event handlers
    const buttonName = event.currentTarget.dataset.title;
    const buttonIndex = event.currentTarget.dataset.index;


    const title = buttonName ? buttonName : 'N/A';
    const desc = event.currentTarget.dataset.desc ? event.currentTarget.dataset.desc : 'N/A';
    const link = event.currentTarget.dataset.link ? event.currentTarget.dataset.link : 'N/A';
    const id = event.currentTarget.dataset.id;

    console.log(buttonName);
    console.log(buttonIndex);
    console.log(title);
    console.log(desc);
    console.log(link);
    console.log(id);

    if (buttonName === 'All') return getProjects();
    if (buttonName === 'Upload') return uploadProject(title, desc, link);
    if (buttonName === 'Update') return updateProject(id, title, desc, link);
    if (buttonName === 'Delete') return deleteProject(id);
    return null;
}

  const getProjects = () => {
    console.log('get all projects');

    Projects.getAll()
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response));
  };

  const uploadProject = (title, desc, link) => {
    console.log('upload project');

    Projects.upload()
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response));
  };

  const updateProject = (id, title, desc, link) => {
    console.log('update project');

    // refactor to axios.put(url[, data[, config]])
    Projects.update("5e2a516ff1cd652804ae481a")
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response));

  };

  const deleteProject = id => {
    console.log('delete project');

    Projects.delete("5e2a516ff1cd652804ae481a")
    .then(res => console.log(res))
    .catch(err => console.log(err.response));
  };

  const hollaBack = () => {
    console.log('holla project');

    Projects.callBackend()
    .then(res => console.log(res))
    .catch(err => { console.log(err.response) });

  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {/* replace with username  */}
            Welcome, {welcomeHeader}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {topDrawer.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {bottomDrawer.map((text, index) => (
            <ListItem 
            button key={text} 
            data-title={text}
            data-index={index}
            onClick={menuClickHandler}
            >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
            Menu - Signin
        </Typography>
        <FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
      </main>
    </div>
  );
}
