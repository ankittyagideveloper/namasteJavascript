import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

function Playlist({ vidsData }) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 900,
        bgcolor: "background.paper",
        marginTop: "100px",
        overflow: "auto",
        position: "relative",
        maxHeight: 500,
      }}
    >
      {console.log(vidsData)}
      {vidsData.map((x) => {
        return (
          <>
            <ListItemButton alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src={x.snippet.thumbnails.default.url}
                />
              </ListItemAvatar>
              <ListItemText primary={x.snippet.title} />
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
            </ListItemButton>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}

export default Playlist;
