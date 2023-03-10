import styled from "styled-components";

export const Head = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 55rem;
  h1 {
    font-family: "Dancing Script", cursive;
    color: white;
    font-size: 100px;
    text-align: center;
    margin-top: 0.25em;
    padding-top: 0.5em;
  }
  section {
    margin-top: 5em;
    display: flex;
    justify-content: center;
  }
  img {
    border-radius: 50%;
    height: 13em;
    width: 16em;
    margin-right: 4em;
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 5em;
    margin-bottom: 5em;
  }
  p {
    color: white;
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    margin: 0;
  }

  button {
    --border-radius: 24px;
    --border-width: 8px;

    appearance: none;
    position: relative;
    padding: 1em 2em;
    border: 0;
    background-color: transparent;
    font-family: "Montserrat", sans-serif;
    font-size: 2em;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
  }

  button::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;

    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );

    mask-image: var(--m-i), var(--m-i);
    mask-origin: var(--m-o);
    mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;

    filter: hue-rotate(0);
    animation: hue linear 500ms infinite;
    animation-play-state: paused;
  }

  button:hover::after {
    animation-play-state: running;
  }

  @keyframes hue {
    to {
      filter: hue-rotate(1turn);
    }
  }

  /* to have things in good shape */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 600px) {
    height: 37rem;
    width: 100%;
    h1 {
      font-size: 65px;
    }
    img {
      height: 6em;
      width: 6.5em;
      margin-right: 0px;
    }
    button {
      font-size: 1.25em;
    }
    section {
      margin-top: 3em;
    }
    div {
      margin-top: 4em;
      margin-bottom: 2em;
    }
  }
`;
