import styled from "styled-components";

export const PriceBox = styled.div`
  height: 95%;
  width: 65%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10xpx;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const TopDiv = styled.div`
  padding: 5%;
  background-color: #faf7f7;
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const TealText = styled.h2`
  color: rgb(52, 183, 170);
  font-size: 1.8rem;
`;
export const LimeText = styled.h3`
  color: rgb(179, 236, 55);
  font-size: 1.2rem;
`;

export const GrayParagraph = styled.p`
  color: gray;
  font-size: 1rem;
  font-weight: 500;
`;

export const BottomDiv = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const LeftDiv = styled.div`
  padding: 5%;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgb(52, 183, 170);
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceText = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  color: white;
  padding-right: 5%;
`;

export const RightDiv = styled.div`
  padding: 5%;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgb(100, 214, 203);
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const BoxHeader = styled.h4`
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7%;
`;

export const BoxParagraph = styled.li`
  list-style: none;
  color: white;
  font-size: 1rem;
  font-weight: 200;
  margin-top: 3px;
`;

export const PriceButton = styled.button`
  background-color: rgb(179, 236, 55);
  height: 50px;
  width: 200px;
  border-radius: 10px;
  border-color: transparent;
  color: white;
  cursor: pointer;
`;
