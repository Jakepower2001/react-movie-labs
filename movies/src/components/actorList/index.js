import React from "react";
import Actor from "../actorCard";
import  Grid  from "@mui/material/Grid";

const ActorList = ( {actors, action}) => {
    let actorCards = actors.map((m) =>(
        <Grid key ={m.id} item xs={12} sm={6} lg={3} xl={2}>
            <Actor key={m.id} actor={m} action={action}/>
        </Grid>
    ));
    return actorCards;
};

export default ActorList;