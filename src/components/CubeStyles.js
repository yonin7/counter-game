import styled from "styled-components";

export const CounterCubeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Button = styled.button`
  position: relative;
  cursor: pointer;
  background-color: rgb(255, 255, 204);
  border: 1px solid black;
  font-size: 1rem;
  :hover {
    background: #ffb703;
    color: #fff;
  }
  :active {
    transform: scale(0.9);
  }
`;
export const CounterCube = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  width: 150px;
  height: 150px;
  margin: 20px;
  border: 1px solid black;
  background-color: rgb(255, 255, 204);
  transition: background 800ms ease, color 800ms ease, transform 500ms ease;

  :hover {
    background: #ffb703;
    color: #fff;
  }
  :active {
    transform: scale(0.9);
  }
`;
