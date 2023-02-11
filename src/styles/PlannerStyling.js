import styled from "styled-components";

export const Form = styled.div`
  background: transparent;
  position: absolute;
  .budget-display {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
  }
`;

export const Card = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    overflow: hidden;
    border-radius: 2em;
    text-decoration: none;
    background: white;
    margin: 1em;
    padding: 2.75em 2.5em;
    box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.1);
    margin-right: 80px;
  }
  ul {
    list-style-type: none;
  }
  p {
    font-size: 40px;
    margin-bottom: 50px;
  }
`;

export const Budget = styled.div`
  div {
    display: flex;
  }
  h2 {
    width: 200px;
    margin-right: 150px;
    margin-bottom: 15px;
    color: #5e5c5b;
    font-size: 25px;
    font-family: "Lato", sans-serif;
    font-weight: light;
  }
  h3 {
    color: #5e5c5b;
    font-size: 25px;
    font-family: "Lato", sans-serif;
    font-weight: light;
  }
  .delete-btn {
    margin-left: 5px;
    margin-top: -13px;
    cursor: pointer;
  }
`;

export const ExpenseStyle = styled.div`
  input {
    width: 360px;
    height: 50px;
    margin-bottom: 30px;
    border: 2px solid #000;
    outline: none;
    background: none;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2em;
  }
  button {
    width: 150px;
    height: 40px;
    background: #f74d19;
    color: #fff;
    border: #fff;
    margin-top: 10px;
    font-size: 20px;
  }
`;

export const Box = styled.div`
  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
  }
  span {
    background-color: #f74d19;
    color: white;
    border-radius: 0.125em;
    font-weight: 400;
    display: inline-block;
    width: 100px;
    height: 30px;
  }
  p {
    font-size: 22px;
    width: 280px;
    height: 60px;
    border-radius: 0.25em;
    text-decoration: none;
    text-align: center;
    background: white;
    padding: 10px;
    padding-top: 15px;
    margin-right: 30px;
    margin-top: 80px;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 700;
  }
  h1 {
    font-family: "Dancing Script", cursive;
    color: white;
    font-size: 100px;
    text-align: center;
    padding-top: 100px;
  }
  input {
    background-color: #f74d19;
    color: white;
    border: none;
    border-radius: 0.125em;
    height: 30px;
    width: 100px;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 22px;
    margin-left: 10px;
  }
  input::placeholder {
    color: white;
  }
  button {
    margin-left: 8px;
    font-family: "Montserrat Alternates", sans-serif;
    border: none;
    width: 45px;
    height: 25px;
    border-radius: 5px;
    background-color: #f74d19;
    font-weight: 700;
    color: white;
  }
`;
