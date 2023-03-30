import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import stumpIcon from "./images/stump.png";
import logoIcon from "./images/logo.png";

const drawerWidth = 240;
const navItems = [
  <NavLink
    className={(status) => (status.isActive ? "active" : "inActive")}
    to="/"
  >
    Home
  </NavLink>,
  <NavLink
    className={(status) => (status.isActive ? "active" : "inActive")}
    to="/players"
  >
    Players
  </NavLink>,
  <NavLink
    className={(status) => (status.isActive ? "active" : "inActive")}
    to="/teams"
  >
    Teams
  </NavLink>,
  <NavLink
    className={(status) => (status.isActive ? "active" : "inActive")}
    to="/matches"
  >
    Matches
  </NavLink>,
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logoIcon}
          alt="logo"
          className="logo-header-ballIcon-img flext-icon-phone-size"
        />
        <div className="logo-text-hdr-cntnr flex-text-hdr-phone-small-dev">
          Cricket Dynamics
        </div>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "left",
              }}
            >
              <ListItemText primary={item} underline="none" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "white", padding: "5px" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 1,
              height: "40px",
              width: "40px",
              borderRadius: "10px",
              display: { sm: "none" },
              backgroundColor: "rgba(142, 38, 38, 0)",
            }}
          >
            <img
              className="left-mobile-menu-drager-btn"
              src={stumpIcon}
              alt="stumpIcon"
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              textAlign: "left",
              fontSize: "30px",
              fontWeight: "600",
              display: { xs: "none", sm: "flex" },
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <img
              src={logoIcon}
              alt="logo"
              className="logo-header-ballIcon-img"
            />{" "}
            <div className="logo-text-hdr-cntnr">Cricket Dynamics</div>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
