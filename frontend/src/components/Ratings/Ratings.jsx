import React from "react";
import "./Ratings.css";
import Card from "react-bootstrap/Card";
import NaviBar from "../NaviBar/NaviBar";
import Sidebar from "../Sidebar";

const Ratings = () => {
    return (
      <div className="Glass">
      <Sidebar />
      <div className="move">
        <NaviBar />
        <div className="cards">
          {/* <div className="k"> */}
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Nhlalala</Card.Title>
                <img
                  src="https://static.fanpage.it/wp-content/uploads/sites/22/2021/09/beef-burger.jpg"
                  alt=""
                  className="image"
                ></img>
                <Card.Title>Burger</Card.Title>
                <option value="5">{"★★★★★"}</option>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Matome</Card.Title>
                <img
                  src="https://static.fanpage.it/wp-content/uploads/sites/22/2021/09/beef-burger.jpg"
                  alt=""
                  className="image"
                ></img>
                <Card.Title>Pizza</Card.Title>
                <option value="4">{"★★★★"}</option>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Oratile</Card.Title>
                <img
                  src="https://static.fanpage.it/wp-content/uploads/sites/22/2021/09/beef-burger.jpg"
                  alt=""
                  className="image"
                ></img>
                <Card.Title>Chicken</Card.Title>
                <option value="4">{"★★★★"}</option>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Nhlalala</Card.Title>
                <Card.Title>MilkShake</Card.Title>
                <option value="4">{"★★★★"}</option>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        {/* </div> */}
      </div>
    </div>
    )
};

export default Ratings;
