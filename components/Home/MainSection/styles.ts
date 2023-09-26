import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  gap: 20px;
  justify-items: center;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    /* Set specific column widths for screens up to 1024px */
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }

  @media (max-width: 768px) {
    /* Set specific column widths for screens up to 768px */
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }

  @media (max-width: 576px) {
    /* Set specific column widths for screens up to 576px */
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

export const Cards = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 168px;
  margin-top: 120px;

  @media (max-width: 574px) {
    flex-direction: column;
    gap: 73px;
  }
`;

export const Text = styled.h3`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 32px;
`;
