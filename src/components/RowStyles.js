import styled from "styled-components";

export const RowContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 740px) {
  }
`;
export const ColumnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-direction: row;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

export const RowTitle = styled.h3`
  margin-bottom: 0;
`;
