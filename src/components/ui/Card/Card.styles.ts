import styled from "styled-components";

export const CardLayout = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media (max-width: 480px) {
    min-width: 300px;
    margin: 20px auto;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin-left: auto;
  margin-right: auto;
`;

export const Stadium = styled(Title)`
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const TeamsLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TeamLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  max-width: 100px;
  flex: 1 1 auto;
  position: relative;
`;

export const TeamTitle = styled(Title)`
  width: min-content;
  margin-bottom: 25px;
`;

export const Score = styled(Title)`
  font-size: 24px;
  margin-bottom: 25px;
`;

export const CardFooter = styled.div`
  margin: auto;
  margin-bottom: 5px;
`;

export const TourNumber = styled(Title)`
  text-align: center;
  margin-bottom: 10px;
`;

export const MatchDate = styled(Title)``;
