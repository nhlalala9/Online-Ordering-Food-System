import React, {useState,useEffect} from "react";
import "./Ratings.css";
import Card from "react-bootstrap/Card";
import NaviBar from "../NaviBar/NaviBar";
import Sidebar from "../Sidebar";
import axios from "axios";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Ratings = () => {
  const [cards, setCards] = useState([]);
  const [value, setValue] = React.useState();

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/reviews`)
      .then((response) => {
        setCards(response.data.data);
        // console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);



    return (
      <div className="Glass">
      <Sidebar />
      <div className="move">
        <NaviBar />
        {cards.map((card) => (
        <div className="cards">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{card.attributes.CustomerName}</Card.Title>
                {/* <Card.Title>MilkShake</Card.Title> */}
                {/* <option value="4">{<StarRating rating={rating} />}</option> */}

                <Card.Text> <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
                <Rating name="read-only" value={card.attributes.Rate} readOnly />
                </Box>
                {/* {card.attributes.Rate} */}
               
                {card.attributes.Comment}
                </Card.Text>
              </Card.Body>
            </Card>
             
          </div>
    ))}
      </div>
    </div>
    )
};

export default Ratings;
