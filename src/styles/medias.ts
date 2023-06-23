type Sizes = {
  mobile: number;
  tablet: number;
  desktop: number;
  largeDesktop: number;
  largerDesktop: number;
}

type MediaBreakPoints = {
  mobile: string;
  tablet: string;
  desktop: string;
  largeDesktop: string;
  largerDesktop: string;
}

export const size: Sizes = {
  mobile: 575.98,
  tablet: 767.98,
  desktop: 991.98,
  largeDesktop: 1199.98,
  largerDesktop: 1399.98,
};

export const breakpoints: MediaBreakPoints = {
  mobile: `@media (max-width: ${size.mobile}px)`,
  tablet: `@media (max-width: ${size.tablet}px)`,
  desktop: `@media (max-width: ${size.desktop}px)`,
  largeDesktop: `@media (max-width: ${size.largeDesktop}px)`,
  largerDesktop: `@media (max-width: ${size.largerDesktop}px)`,
};
