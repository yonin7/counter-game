import styled from "styled-components";

export const RowContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media (max-width: 740px) {
    flex-direction: column;
  }
`;
