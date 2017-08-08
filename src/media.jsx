import { css } from 'styled-components';

const media = {
  xs: (...args) => css`
    @media (min-width: 0rem) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (min-width: 49rem) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (min-width: 64rem) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (min-width: 75rem) {
      ${css(...args)}
    }
  `,
};

export default media;
