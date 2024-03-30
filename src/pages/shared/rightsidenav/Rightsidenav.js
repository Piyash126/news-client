import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";

import { ListGroup } from "react-bootstrap";
import BrandCarousel from "../brand/BrandCarousel";
import { AuthContext } from "../../../contexts/authProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";



const Rightsidenav = () => {
  const {providerLogin}=useContext(AuthContext);

  const googleProvider=new GoogleAuthProvider();

  const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })

    .catch(error=>console.error(error))
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary" className="mb-2" onClick={handleGoogleSignIn}>
          <FaGoogle></FaGoogle> Log in with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Log in with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default Rightsidenav;
