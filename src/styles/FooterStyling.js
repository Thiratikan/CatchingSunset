import styled from "styled-components";

export const Style = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
  margin-top: 1000px;
  clear: both;
  img {
    height: 50px;
  }
  div {
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    height: 7em;
    padding-top: 2em;
  }
  @media only screen and (max-width: 600px) {
    img {
      height: 30px;
    }
    div {
      height: 5.5em;
    }
  }
`;
