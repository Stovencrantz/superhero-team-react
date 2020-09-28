import React from "react";
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
  console.log("(ResultCard) props: ", props);

  function statBarColor(value) {
    console.log("value: ", typeof value);
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
  console.log(statBarColor());

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
            return (
              <MDBCard
                style={{ width: "14rem", height: "38rem" }}
                key={i + Math.random()}
                className="m-2"
              >
                <MDBCardImage
                  className="img-thumbnail"
                  src={character.img}
                  key={i + Math.random()}
                />
                <MDBCardBody>
                  <MDBCardTitle
                    className="align-text-center myColor"
                    key={i + Math.random()}
                  >
                    <strong>{character.name}</strong>
                  </MDBCardTitle>
                  <hr></hr>

                  <MDBCardText>
                    <p className="marginBtm">
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
                    </p>
                    <p key={i + Math.random()} className="marginBtm">
                      Alignment: {character.alignment}
                    </p>
                    <p key={i + Math.random()} className="marginBtm">
                      Occupaton: {character.work}
                    </p>
                    <p key={i + Math.random()}>
                      <strong>
                        Total Power:{" "}
                        {parseInt(character.combat) +
                          parseInt(character.durability) +
                          parseInt(character.intelligence) +
                          parseInt(character.power) +
                          parseInt(character.speed) +
                          parseInt(character.strength)}
                      </strong>{" "}
                    </p>
                  </MDBCardText>
                  <hr></hr>
                  <MDBDropdown className="text-center" size="sm">
                    <MDBDropdownToggle color="secondary" toggle={true}>
                      Power Stats
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="secondary" basic>
                      <MDBDropdownItem>
                        <p key={i + Math.random()}>
                          Combat: {character.combat}
                          <MDBProgress
                            className="my-2"
                            material
                            value={character.combat}
                            color={statBarColor(parseInt(character.combat))}
                          />
                        </p>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <p key={i + Math.random()}>
                          Durability: {character.durability}
                          <MDBProgress
                            className="my-2"
                            material
                            value={character.durability}
                            color={statBarColor(parseInt(character.durability))}
                          />
                        </p>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <p key={i + Math.random()}>
                          Intelligence: {character.intelligence}
                          <MDBProgress
                            className="my-2"
                            material
                            value={character.intelligence}
                            color={statBarColor(
                              parseInt(character.intelligence)
                            )}
                          />
                        </p>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <p key={i + Math.random()}>
                          Power: {character.power}
                          <MDBProgress
                            className="my-2"
                            material
                            value={character.power}
                            color={statBarColor(parseInt(character.power))}
                          />
                        </p>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <p key={i + Math.random()}>
                          Speed: {character.speed}
                          <MDBProgress
                            className="my-2"
                            material
                            value={character.speed}
                            color={statBarColor(parseInt(character.speed))}
                          />
                        </p>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <p key={i + Math.random()}>
                          Strength: {character.strength}
                          <MDBProgress
                            className="my-2"
                            material
                            value={character.strength}
                            color={statBarColor(parseInt(character.strength))}
                          />
                        </p>
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
