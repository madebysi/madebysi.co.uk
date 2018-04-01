import roundTo from 'usfl/math/round-to';

export const layoutWidth = 375;
export const layoutWidthMd = 1280;

export const siteMargin = 30;
export const siteMarginMd = 16;

export const numColumns = 16;
export const column = 63;
export const columnGutter = 16;

export const standardMargin = roundTo(siteMargin / layoutWidth * 100);
export const standardMarginMd = roundTo((siteMarginMd + column + columnGutter) / layoutWidthMd * 100);

export const siteMarginPercent = roundTo(siteMargin / layoutWidth, 2) * 100;
export const siteMarginPercentMd = roundTo(siteMarginMd / layoutWidthMd, 2) * 100;

export const columnPercent = roundTo(column / layoutWidthMd, 2) * 100;
export const columnGutterPercent = roundTo(columnGutter / layoutWidthMd, 2) * 100;

export const columns = (count, add = 0) => {
    return add + roundTo((column * count + columnGutter * (count - 1)) / layoutWidthMd, 2) * 100;
};

export const maxSiteWidth = layoutWidthMd * 2;

export const toPercent = px => roundTo(px / layoutWidth * 100, 2);
export const toPercentMd = px => roundTo(px / layoutWidthMd * 100, 2);
