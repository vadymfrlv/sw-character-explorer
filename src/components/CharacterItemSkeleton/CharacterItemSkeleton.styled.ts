import styled from 'styled-components';

export const CharacterListSkeleton = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CharacterItemInfoSkeleton = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 158px;

  overflow: hidden;
  z-index: 1;

  padding: 10px 18px 13px;

  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: inset 0 0 9px 0 rgba(255, 255, 255, 0.35), 0 0 9px 0 rgba(255, 255, 255, 0.35);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );

    animation: shimmer 3s infinite;
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 175px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    height: 168px;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export const Name = styled.div`
  height: 34px;
  width: 150px;
  margin: 0 auto 12px;

  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.25);

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 41px;
  }
`;

export const Detail = styled.div`
  height: 24px;
  width: 100%;

  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.25);

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 26px;
  }
`;
