export const breakpoints = {
    xl: '1200',
    sm: '768',
    xs: '425',
};

export const mediaQuery = (breakpoint) => {
    return `@media screen and (max-width: ${
        breakpoints[breakpoint] ? breakpoints[breakpoint] : breakpoint
    }px)`;
};
