import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBProgress,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

import "./index.css";

const ResultCard = (props) => {
  // const [totalPower, setTotalPower] = useState(0);
  console.log("(ResultCard) props: ", props);

  function statBarColor(value) {
    // console.log("value: ", typeof value);
    if (value <= 50) {
      return "warning";
    } else if (value > 50 && value <= 75) {
      return "success";
    } else if (value > 75 && value <= 100) {
      return "danger";
    } else {
      return;
    }
  }
  // console.log(statBarColor());

  function tierList(value) {
    if (value <= 100) {
      return "F";
    } else if (value > 100 && value <= 200) {
      return "D";
    } else if (value > 200 && value <= 300) {
      return "C";
    } else if (value > 300 && value <= 400) {
      return "B";
    } else if (value > 400 && value <= 500) {
      return "A";
    } else if (value > 500 && value < 600) {
      return "S";
    } else if (value === 600) {
      return "GOD";
    } else {
      return;
    }
  }

  return (
    <MDBCol className="justify-content-center align-items-center text-center container-fluid">
      {props.characters.length ? (
        <div className="row justify-content-center align-items-center container-fluid">
          {props.characters.map((character, i) => {
            console.log("character in map: ", character);
            return (
              <MDBCard
                style={{ width: "14rem", height: "38rem" }}
                key={i}
                className="m-2"
              >
                <MDBCardImage
                  className="img-fluid img-thumbnail"
                  src={character.img}
                />
                <MDBCardBody>
                  <MDBCardTitle className="align-text-center myColor">
                    <strong>{character.name}</strong>
                  </MDBCardTitle>
                  <hr></hr>

                  <MDBCardText className="marginBtm">
                    Tier Ranking:{" "}
                    <strong>
                      <span className="myColor">
                        {tierList(
                          parseInt(character.combat) +
                            parseInt(character.durability) +
                            parseInt(character.intelligence) +
                            parseInt(character.power) +
                            parseInt(character.speed) +
                            parseInt(character.strength)
                        )}
                      </span>
                    </strong>
                  </MDBCardText>
                  <MDBCardText className="marginBtm">
                    Alignment: {character.alignment}
                  </MDBCardText>
                  <MDBCardText className="marginBtm">
                    Occupaton: {character.work}
                  </MDBCardText>
                  <MDBCardText>
                    <strong>
                      Total Power:{" "}
                      {parseInt(character.combat) +
                        parseInt(character.durability) +
                        parseInt(character.intelligence) +
                        parseInt(character.power) +
                        parseInt(character.speed) +
                        parseInt(character.strength)}
                    </strong>{" "}
                  </MDBCardText>
                  <hr></hr>
                  <MDBDropdown className="text-center" size="sm">
                    <MDBDropdownToggle color="secondary">
                      Power Stats
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="secondary" basic>
                      <MDBDropdownItem>
                        Combat: {character.combat}
                        <MDBProgress
                          className="my-2"
                          material
                          value={character.combat}
                          color={statBarColor(parseInt(character.combat))}
                        />
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        Durability: {character.durability}
                        <MDBProgress
                          className="my-2"
                          material
                          value={character.durability}
                          color={statBarColor(parseInt(character.durability))}
                        />
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        Intelligence: {character.intelligence}
                        <MDBProgress
                          className="my-2"
                          material
                          value={character.intelligence}
                          color={statBarColor(parseInt(character.intelligence))}
                        />
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        Power: {character.power}
                        <MDBProgress
                          className="my-2"
                          material
                          value={character.power}
                          color={statBarColor(parseInt(character.power))}
                        />
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        Speed: {character.speed}
                        <MDBProgress
                          className="my-2"
                          material
                          value={character.speed}
                          color={statBarColor(parseInt(character.speed))}
                        />
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        Strength: {character.strength}
                        <MDBProgress
                          className="my-2"
                          material
                          value={character.strength}
                          color={statBarColor(parseInt(character.strength))}
                        />
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  <div className="row">
                    <MDBBtn className="ml-auto" color="white" size="sm">
                      Add To
                    </MDBBtn>
                    <MDBBtn className="mr-auto" color="white" size="sm">
                      Universe
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            );
          })}
        </div>
      ) : (
        <h3>No Searches Yet</h3>
      )}
    </MDBCol>
  );
};

export default ResultCard;
