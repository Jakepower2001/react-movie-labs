import react from "react";
import actor from "../actorsCard";
import  Grid  from "@mui/material/Grid";

const ListActor = ( {actors, action}) => {
    let actorCards = actors.map((m) =>(
        <Grid key ={m.id} item xs={12} sm={6} lg={3} xl={2}>
            <actor key={m.id} actor={m} action={action}/>
        </Grid>
    ));
    return actorCards;
};

export default ListActor;