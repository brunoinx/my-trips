import * as S from './styles';

export const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado"
    />

    <S.Title>React Avançado</S.Title>
    <S.Description>
      React, Typescript, NextJS and Styled Components
    </S.Description>

    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Programador de frente para uma tela com código"
    />
  </S.Wrapper>
);
