import styled from 'styled-components';

export const DeleteBtn = styled.button`
  background-color: ${p => p.theme.colors.transparent};

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  cursor: pointer;

  &:hover {
    animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }

  @keyframes shake-bottom {
    0%,
    100% {
      transform: rotate(0deg);
      transform-origin: 50% 100%;
    }
    10% {
      transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      transform: rotate(4deg);
    }
    80% {
      transform: rotate(-2deg);
    }
    90% {
      transform: rotate(2deg);
    }
  }
`;
