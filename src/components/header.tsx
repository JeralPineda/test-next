'use client';

import { styled } from 'styled-components';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>BANHCAFE</LogoContainer>

      <Button>Intranet</Button>
    </HeaderContainer>
  );
};

const LogoContainer = styled.div`
  font-size: 1.5;
  font-weight: 900;
`;

const Button = styled.button`
  background-color: #000;
  border-radius: 20px;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
`;

const HeaderContainer = styled.div`
  /* background: #000; */
  height: 4rem;
  padding: 2.5rem;
  /* background: #ddd; */
  /* margin: 0 2rem; */
  /* border-radius: 1rem; */
  border-bottom: 1px solid #171616;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
