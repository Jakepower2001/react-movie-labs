import React from "react";
import  Card  from "@mui/material/Card";
import  CardMedia  from "@mui/material/CardMedia";
import  CardContent  from "@mui/material/CardContent";
import  Typography  from "@mui/material/Typography";
import  TextField  from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import {getActors} from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formController =
{
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"

};

export default function FilterActorsCard(props){
    const { error, isLoading, isError} = useQuery("actors", getActors);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError){
        return <h1>{error.message}</h1>;
    }

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type,value);
    };

    const handleTextChange = (e, props) => {
        handleChange(e, "name", e.target.value);
    };

    return (
        <Card 
          sx={{
            maxWidth: 345,
            backgroundColor: "rgb(204, 204, 0)"
          }} 
          variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h1">
              <SearchIcon fontSize="large" />
              Filter the Actors.
            </Typography>
            <TextField
          sx={{...formController}}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
          </CardContent>
          <CardMedia
            sx={{ height: 300 }}
            image={img}
            title="Filter"
          />
          <CardContent>
            <Typography variant="h5" component="h1">
              <SearchIcon fontSize="large" />
              Filter the actors.
              <br />
            </Typography>
          </CardContent>
        </Card>
      );
    }