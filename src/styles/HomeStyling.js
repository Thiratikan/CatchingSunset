import styled from "styled-components";

export const Main = styled.div`
  height: 10em;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
  }
  img {
    width: 50px;
    margin-left: 20px;
  }
  .nav {
    position: relative;
    font-family: "Roboto", sans-serif;
    color: white;
    padding: 4em;
    display: flex;
  }
  section {
    display: flex;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
    display: flex;
  }
  li {
    cursor: pointer;
    font-size: 2em;
    margin-right: 1em;
  }
  p {
    margin-left: 10px;
    margin-right: 20em;
    font-weight: 700;
    font-size: 2.5em;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .font {
    font-family: "Fredoka One", cursive;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 10em;
  }

  h1 {
    font-size: 150px;
  }
  h3 {
    font-size: 70px;
  }
  h4 {
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    margin-top: 2em;
    cursor: pointer;
    /* Adjust as needed */
  }

  .typewriter {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    white-space: nowrap; /* Keeps the content on a single line */
    letter-spacing: 0.15em;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: none;
    }
  }
`;
