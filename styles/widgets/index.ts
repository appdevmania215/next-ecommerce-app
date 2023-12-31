import styled from "styled-components";

interface FlexProps {
  gap?: number;
}

interface MarginProps {
  m?: number;
}

export const Container = styled.div`
  max-width: 1109.83px;
  margin: auto;
  height: 100%;

  @media only screen and (max-width: 1194px) {
    padding: 0 24px;
  }
`;

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap}px;
`;

export const Margin = styled.div<MarginProps>`
  margin: ${({ m }) => m}px;
`;

export const SpaceOut = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
