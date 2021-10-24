import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
`;

const animationModalBox = keyframes`
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Box = styled.div`
  width: 30rem;
  background-color: #fff;

  padding: 2rem;
  border-radius: 0.312rem;
  animation: ${animationModalBox} 0.3s ease-in-out;
  strong {
    margin: 1.5rem 0;
    display: inline-block;
    font-size: 2rem;
  }

  form {
    .field {
      margin-bottom: 0.5rem;

      input {
        padding: 1rem 0.625rem;
        width: 100%;

        border: 0.0625rem solid #e7e7e7;
        border-radius: 0.312rem;

        outline: none;
        transition: all 0.2s;

        &:focus {
          border-color: #9153f4;
        }
      }
    }
  }

  footer {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
      width: 100%;
      padding: 1rem 0.625rem;

      font-weight: 500;
      background-color: #9153f4;
      color: #fff;
    }

    button:first-child {
      background-color: #ff2442;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
  }

  @media (max-width: 380px) {
    strong {
      font-size: 1.5rem;
    }

    form {
      footer {
        flex-direction: column;
      }
    }
  }
`;
