
import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { Form ,Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../fakeData/fakeData'
import './Booking.css'

const useStyles = makeStyles ((theme) => ({
textField: {
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: 200,
}
}))

const Booking = () => {
    const{touristSpot} = useParams();
    const location = fakeData.find (city => city.name === touristSpot);
    const classes = useStyles();
    return (
        <div className='booking'>
           <div className='detail'>
                <h1>{location.name}</h1>
                <h3>{location.description}</h3>
                
            </div>
                <div className = "form">
                <Form>
  <Form.Group>
    <Form.Label>Origin</Form.Label>
    <Form.Control placeholder="Dhaka" />
   
  </Form.Group>

  <Form.Group>
    <Form.Label>Destination</Form.Label>
    <Form.Control placeholder={location.name} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">

  <div className = "date">
  <form className={classes.container}>
  
  <TextField        
                        id="date"
                        label="From"
                        type="date"
                        defaultValue="2020-09-17"
                        className={classes.textField}
                        InputLabelProps={{shrink: true}}
                    /> 
                    <TextField
                        id="date"
                        label="To"
                        type="date"
                        defaultValue="2020-09-24"
                        className={classes.textField}
                        InputLabelProps={{shrink: true}}
                    />
                    </form>
  </div>

  </Form.Group>
  <Link to = {"/hotelRoom/"+ location.name}>
  <Button style = {{width : '100px'}} variant="warning" type="submit">
    Submit
  </Button>
  </Link>
  
</Form>
                </div>
        </div>
       
    );
};

export default Booking;