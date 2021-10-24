import styled from "styled-components";

export const Container = styled.div`
  width: min(90vw, 67.5rem);
  margin: 0 auto;

  header {
    height: 5.625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  main {
    width: 100%;
    margin-top: 2rem;

    .header {
      
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        margin: 2rem 0 1.5rem;
        padding: 0.75rem 1.5rem;
        display: inline-block;
        font-weight: 500;

        background: rgba(0, 0, 0, 0)
          linear-gradient(90deg, rgb(4, 211, 97) 0%, rgba(4, 211, 97, 0.25) 100%)
          repeat scroll 0% 0%;

        border: 0.0625rem rgba(4, 211, 97, 0.25);
        border-radius: 1.125rem;
      }

      button {
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        font-weight: 700;
        color: #fff;
        background-color: #9153f4;
        transition: filter 0.2s;
        
        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    table {
      width: 100%;
      border-spacing: 0 0.5rem;
      color: #979cb3;

      thead tr th:first-child,
      tbody tr td:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
      }

      tbody tr {
        opacity: 0.9;

        &:hover {
          opacity: 1;
        }
      }

      thead {
        tr {
          th {
            padding: 1rem 2rem;
            text-align: left;

            font-weight: normal;
            background-color: #fff;
          }

          th:last-child {
            text-align: center;
          }
        }
      }

      tbody {
        tr {
          td {
            padding: 1rem 2rem;
            text-align: left;

            font-weight: normal;
            background-color: #fff;

            > div {
              display: flex;
              align-items: center;
              gap: 0.5rem;
            }
          }

          td.dark-blue {
            color: #363f5f;
          }

          .buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;

            button {
              padding: 1rem;
              font-size: 0;
              font-weight: 500;
              background-color: #113cfc;
              color: #fff;
              clip-path: circle();
              &:hover {
                filter: brightness(0.9);
              }
            }

            button + button {
              background-color: #ff2442;
            }
          }
        }
      }
    }
  }

  @media (max-width: 910px) {
    main {
      overflow-x: auto;
    }
  }

  @media (max-width: 780px) {
    tbody tr {
      td .svg {
        display: none;
      }
    }
  }

  @media (max-width: 480px) {
    main {
      h2 {
        font-size: 1.125rem;
      }

      table {
        thead {
          tr th {
            /* padding: 1rem 0.875rem; */
          }
        }

        tbody tr {
          td {
            /* padding: 1rem 0.875rem; */
          }
        }
      }
    }
  }
`;

export const NoUsers = styled.div`
  margin: 1.875rem auto;
  text-align: center;

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;

    h3 {
      font-size: 1.125rem;
    }

    p {
      margin-top: 0.5rem;
    }
  }
`;
