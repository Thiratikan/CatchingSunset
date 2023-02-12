import styled from "styled-components";

export const Form = styled.div`
  background: transparent;
  position: relative;
  width: 100%;
  height: 100%;
  .budget-display {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
  }
  @media only screen and (max-width: 600px) {
    .budget-display {
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  .card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 2em;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 1em;
    padding: 2.75em 2.5em;
    box-shadow: 0 1.5em 2.5em -0.5em rgba(#000000, 0.1);
    margin-right: 80px;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }
  p {
    margin: 0px;
    font-size: 40px;
    margin-bottom: 50px;
    color: white;
    font-family: "Roboto", sans-serif;
  }
  .expense {
    width: 400px;
    height: 450px;
  }
  .AddEx {
    width: 530px;
    height: 450px;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .card {
      margin-right: 2px;
      padding: 1em 1.5em;
    }
    .expense {
      width: 130px;
      height: 50px;
    }
    .AddEx {
      width: 190px;
      height: 450px;
    }
    p {
      font-size: 20px;
      margin-bottom: 20px;
    }
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
    color: white;
    font-size: 25px;
    font-family: "Roboto", sans-serif;
    font-weight: light;
  }
  h3 {
    color: white;
    font-size: 25px;
    font-family: "Roboto", sans-serif;
    font-weight: light;
  }
  .delete-btn {
    margin-left: 5px;
    margin-top: -13px;
    cursor: pointer;
    color: white;
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    h3 {
      font-size: 13px;
    }
    h2 {
      font-size: 13px;
      margin-right: 10px;
      margin-bottom: 13px;
    }
    .delete-btn {
      font-size: 12px;
    }
  }
`;

export const ExpenseStyle = styled.div`
  input {
    width: 360px;
    height: 50px;
    margin-bottom: 30px;
    border: 2px solid white;
    outline: none;
    background: none;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2em;
  }
  placeholder {
    color: white;
  }
  button {
    width: 150px;
    height: 40px;
    background: white;
    color: black;
    border: #fff;
    margin-top: 10px;
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    input {
      width: 120px;
    height: 20px;
    font-size: 0.75em;
    margin-bottom: 10px;
    }
    button{
      margin-top: 3px;
      width: 40px;
    height: 20px;
    font-size: 12px;
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
    background-color: white;
    color: black;
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
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    padding-top: 15px;
    margin-right: 30px;
    margin-top: 80px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: white;
  }
  h1 {
    margin-top: 1em;
    font-family: "Dancing Script", cursive;
    color: white;
    font-size: 100px;
    text-align: center;
  }
  input {
    background-color: white;
    color: white;
    border: none;
    border-radius: 0.125em;
    height: 30px;
    width: 100px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 22px;
    margin-left: 10px;
  }
  ::placeholder {
    color: white;
  }
  button {
    margin-left: 8px;
    font-family: "Roboto", sans-serif;
    border: none;
    width: 45px;
    height: 25px;
    border-radius: 5px;
    background-color: #f74d19;
    font-weight: 700;
    color: white;
  }
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 65px;
    }
    .box {
      flex-direction: row;
    }
    p {
      display: grid;
      font-size: 20px;
      width: 110px;
      height: 130px;
      margin-right: 10px;
    }
    span {
      width: 90px;
    }
    button {
      margin-left: 1.75em;
    }
  }
`;
