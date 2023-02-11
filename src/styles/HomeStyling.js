import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: fixed;
  }
`;

export const Content = styled.div`
  position: absolute;
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
