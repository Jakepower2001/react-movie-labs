import React from "react";
import  Chip  from "@mui/material/Chip";
import  Paper from "@mui/material/Paper";
import  Typography  from "@mui/material/Typography";
import  Divider  from "@mui/material/Divider";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const chip = {margin: 0.5};

const ActorDetails = ({ actor }) => {

    return(
        <>
        <Divider>
            <Typography variant="h5" component="h3">
                Biography
            </Typography>
        </Divider>
        &nbsp;
        <Typography variant="h6" component="p">
            {actor.biography}
            </Typography>
            <Paper
      component="ul" 
      sx={{...root}}>
        <li>
          <Chip label="Birthday" sx={{...chip}} color="primary" />
        </li>
          <Chip label={`${actor.birthday}` } sx={{...chip}}
 />
      </Paper>

      <Paper
      component="ul" 
      sx={{...root}}>
        <li>
          <Chip label="Place of birth" sx={{...chip}} color="primary" />
        </li>
          <Chip label={`${actor.place_of_birth}` } sx={{...chip}}
 />
      </Paper>

      <Paper
      component="ul" 
      sx={{...root}}>
        <li>
          <Chip label="Popularity" sx={{...chip}} color="primary" />
        </li>
          <Chip label={`${actor.popularity}` } sx={{...chip}}
 />
      </Paper>

      </>
  );
};
export default ActorDetails ;