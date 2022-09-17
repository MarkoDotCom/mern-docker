import * as React from "react";
import {setState, useState} from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ClassTwoToneIcon from "@mui/icons-material/ClassTwoTone";
import ListItemText from "@mui/material/ListItemText";
import LayersIcon from "@mui/icons-material/Layers";
import PersonIcon from "@mui/icons-material/Person";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";

const List01 = () => {
  return (
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ filter: "blur(5px)" }}
                primary="Carta de Presentación"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BusinessTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Experiencias Laborales" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ClassTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="Experiencias Académicas" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="Competencias Tecnológias" />
            </ListItemButton>
          </ListItem>
        </List>
  );
};

export default List01;
