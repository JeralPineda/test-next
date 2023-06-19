'use client';

import { styled } from 'styled-components';
// import { Carousel } from './carousel';
// import { Slider } from './slider';

import { Anton } from '@next/font/google';
import { Slider } from './slider';

const anton = Anton({
  weight: '400',
  variable: '--anton',
  subsets: ['latin'],
});

export const Hero = () => {
  return (
    <HeroStyled>
      <TextContainer>
        <ContainerSubTilte>
          <Subtitle>Intranet</Subtitle>
        </ContainerSubTilte>
        <TitleContainer>
          <Title className={anton.className}>Plataformas</Title>
        </TitleContainer>
      </TextContainer>
      {/* <Carousel /> */}

      <Slider />
    </HeroStyled>
  );
};

const Subtitle = styled.h4`
  font-size: 8rem;
  font-weight: 500;
`;

const ContainerSubTilte = styled.div`
  width: 100%;
  margin-bottom: -5rem;
  /* margin-left: -2rem; */
  display: flex;
  outline: 1px solid pink;
  /* align-items: start; */
`;

const TitleContainer = styled.div`
  width: 100%;

  /* width: 50%; */
  /* margin-left: 1rem; */
`;

const SubTitle = styled.h4`
  font-weight: 900;
  font-size: 8rem;
  /* text-transform: uppercase; */
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 8rem;
  /* text-transform: uppercase; */
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  outline: 1px solid blue;
  padding: 1rem;
  width: 50%;
  /* height: 20rem; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* border-top: 2px solid #616060;
  border-bottom: 2px solid #616060; */
  /* margin-bottom: 2rem; */
`;

const HeroStyled = styled.div`
  width: 100%;
  height: 100vh;
  /* background: #fff; */

  /* background: #7051bd;
  background: radial-gradient(at right bottom, #7051bd, #fff 60%); */
  padding: 2.5rem;
  display: flex;
`;
