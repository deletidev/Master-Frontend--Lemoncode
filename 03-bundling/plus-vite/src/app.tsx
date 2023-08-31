// import { GridMiembros } from './grid-mienbros';
import { Form } from './form';
import { css } from '@emotion/react';
import logo from './assets/logo_2.png';
import logoPublic from '/logo_public.png';
const centerCard = css`
  padding: 2rem;
  padding-bottom: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(30, 30, 30, 0.263);
  gap: 20px;
  background-color: white;
`;

const footerCard = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  & > img {
    height: 30px;
  }
`;
const logoP = css`
  position: absolute;
  height: 50px;
  left: 0;
  bottom: 0;
`;

export const App = () => {
  return (
    <>
      <div css={centerCard}>
        <Form></Form>
        <div css={footerCard}>
          Elaborado para Master Frontend de{' '}
          <img src={logo} alt="logo Lemoncode" />
        </div>
      </div>
      <img css={logoP} src={logoPublic} alt="" />
    </>
  );
};
