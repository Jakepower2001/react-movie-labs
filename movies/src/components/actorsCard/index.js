import React from "react";
import  Card  from "@mui/material/Card";
import  CardActions  from "@mui/material/CardActions";
import CardContent  from "@mui/material/CardContent";
import  CardMedia  from "@mui/material/CardMedia";
import  CardHeader  from "@mui/material/CardHeader";
import  Button  from "@mui/material/Button";
import  Typography  from "@mui/material/Typography";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import StarRateIcon from "@mui/icons-material/StarRate";
import  Grid  from "@mui/material/Grid";
import img from '../../images/fiim-poster-placeholder.png';
import { Link } from "react-router-dom";


export default function ActorCard({ actor }) {

  
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={
            <Typography variant="h5" component="p">
              {actor.name}{" "}
            </Typography>
          }
        />
        <CardMedia
          sx={{ height: 500 }}
          image={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : img
          }
        />
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                <StarRateIcon fontSize="small" />
                {"  "} {actor.known_for_department}{" "}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" component="p">
                <WhatshotIcon fontSize="small" />
                {actor.popularity}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing>
  
          <Link to={`/actors/${actor.id}`}>
            <Button variant="outlined" size="medium" color="primary">
              More Info ...
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }