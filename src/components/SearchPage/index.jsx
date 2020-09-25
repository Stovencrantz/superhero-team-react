import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import "./index.css";

class SearchPage extends React.Component {
  render() {
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="8"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                      Search over 700 comicbook superheroes and villains!
                    </h1>
                    <hr className="hr-light" />
                    <MDBFormInline waves>
                      <div className="md-form my-0">
                        <input
                          className="form-control mr-sm-2 white-text"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </MDBFormInline>
                    <h6 className="mb-4">
                      <MDBCard>
                        <MDBCardBody>
                          <p className="black-text">
                            this is where the card will go
                          </p>
                        </MDBCardBody>
                      </MDBCard>
                    </h6>
                    <MDBBtn color="white">Add to Universe</MDBBtn>
                    <MDBBtn outline color="white">
                      Go to Universe
                    </MDBBtn>
                  </MDBAnimation>
                </MDBCol>

                {/* <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src={this.props.img}
                      alt=""
                      className="img-fluid rounded rightCardImg"
                    />
                  </MDBAnimation>
                </MDBCol> */}
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Other information from different API related to character
                search. Could split into two cols with different links; ie,
                comics character is in and possible youtube videos
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default SearchPage;
