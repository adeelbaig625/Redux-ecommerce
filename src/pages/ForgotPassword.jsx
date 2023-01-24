import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://wallpaperaccess.com/full/2489626.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  font-size: 14px;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Link = styled.a`
  margin: 10px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  margin: 10px 0px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &::disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const ForgotPassword = () => {
  const [Email, setEmail] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventdefault();
  };
  return (
    <Container>
      <Wrapper>
        <Title>Enter email</Title>
        <Form>
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button onClick={handleClick}>SEND EMAIL</Button>
          {/* {error && <Error>Something went wrong...</Error>} */}
          {/* <Link>FORGOT PASSWORD?</Link> */}
          <Link onClick={() => navigate("/register")}>LOGIN</Link>
          <Link onClick={() => navigate("/register")}>
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;
