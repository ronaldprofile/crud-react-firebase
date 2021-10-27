import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 1.5rem 0;
  }

  > div {
    width: 30rem;
    padding: 2rem;

    form {
      input,
      button {
        width: 100%;
        padding: 0.875rem 0.625rem;
      }

      .field {
        margin-bottom: 0.5rem;

        input {
          border: 0.125rem solid #e7e7e7;
          border-radius: 0.312rem;
          transition: all 0.3s;

          &:focus {
            outline-color: #9153f4;
          }
        }
      }

      button {
        margin-top: 0.75rem;
        background-color: #9153f4;

        color: #fff;
        font-weight: 700;
        transition: filter 0.2s;
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
