import styled from 'styled-components';

export const Styling = styled.div`
  .warning {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    animation: hide-animation 1.6s ease-in 0.5s;
    visibility: hidden;
    position: absolute;

    @keyframes hide-animation {
      0% {
        opacity: 1;
        visibility: visible;
      }

      100% {
        opacity: 0;
        visibility: hidden;
      }
    }
  }
`;