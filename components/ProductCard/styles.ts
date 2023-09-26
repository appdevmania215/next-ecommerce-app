import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 16px;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333;
  text-align: center;
  margin: 10px 0;
  height: 80px;

  @media (max-width: 1024px) {
    height: 90px;
  }

  @media (max-width: 768px) {
    height: 72px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Set the desired number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  color: #ff5733;
  text-align: left;
  white-space: nowrap;
`;

export const ProductInfo = styled.div`
  width: 100%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 0 4px;
  margin-top: 8px;
`;

export const ProductRatingInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`;
