// Sizes are for what looks good from the styling perspective:
const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileXL: '500px',
    mobileXLfooter: '',
    tablet: '768px',
    tabletFooter: '',
    laptopXS: '1050px',
    laptopS: '1200px',
    laptop: '1450px',
    laptopL: '1900px',
    desktop: '2560px',
};

export const devices = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    mobileXL: `(max-width: ${sizes.mobileXL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptopXS: `(max-width: ${sizes.laptopXS})`,
    laptopS: `(max-width: ${sizes.laptopS})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
};