// Sizes are for what looks good from the styling perspective:

const heightSizes = {
    xxxs: '350px',
    xxs: '480px',
    xs: '570px',
    s: '640px',
    m: '780px',
    l: '860px',
    xl: '960px',
    xxl: '1100px',
    xxxl: '1200px',
    xxxxl: '1400px',
}

const widthSizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileXL: '500px',
    tablet: '768px',
    tabletL: '895px',
    tabletXL: '960px',
    laptopXS: '1050px',
    laptopS: '1200px',
    laptop: '1450px',
    laptopL: '1900px',
    desktop: '2560px',
};


export const devicesWidth = {
    mobileS: `(max-width: ${widthSizes.mobileS})`,
    mobileM: `(max-width: ${widthSizes.mobileM})`,
    mobileL: `(max-width: ${widthSizes.mobileL})`,
    mobileXL: `(max-width: ${widthSizes.mobileXL})`,
    tablet: `(max-width: ${widthSizes.tablet})`,
    tabletL: `(max-width: ${widthSizes.tabletL})`,
    tabletXL: `(max-width: ${widthSizes.tabletXL})`,
    laptopXS: `(max-width: ${widthSizes.laptopXS})`,
    laptopS: `(max-width: ${widthSizes.laptopS})`,
    laptop: `(max-width: ${widthSizes.laptop})`,
    laptopL: `(max-width: ${widthSizes.laptopL})`,
    desktop: `(max-width: ${widthSizes.desktop})`,
};

export const devicesHeight = {
    xxxs: `(min-height: ${heightSizes.xxxs})`,
    xxs: `(min-height: ${heightSizes.xxs})`,
    xs: `(min-height: ${heightSizes.xs})`,
    s: `(min-height: ${heightSizes.s})`,
    m: `(min-height: ${heightSizes.m})`,
    l: `(min-height: ${heightSizes.l})`,
    xl: `(min-height: ${heightSizes.xl})`,
    xxl: `(min-height: ${heightSizes.xxl})`,
    xxxl: `(min-height: ${heightSizes.xxxl})`,
    xxxxl: `(min-height: ${heightSizes.xxxxl})`,
}