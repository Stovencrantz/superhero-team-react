import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const ResultCard = (props) => {
  console.log("(ResultCard) props: ", props);

  return (
    <MDBCol>
      {props.characters.length ? (
        <div>
          {props.characters.map((character, i) => {
            return (
              <MDBCard style={{ width: "12rem" }}>
                <MDBCardImage className="img-thumbnail" src={character.img} />
                <MDBCardBody>
                  <MDBCardTitle>{character.name}</MDBCardTitle>
                  <MDBCardText>
                    <p>
                      {character.alignment}
                      {character.work}
                      {character.combat}
                      {character.durability}
                      {character.intelligence}
                      {character.power}
                      {character.speed}
                      {character.strength}
                    </p>
                  </MDBCardText>
                  <MDBBtn color="white">Add to Universe</MDBBtn>
                  <MDBBtn color="white">Go to Universe</MDBBtn>
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
