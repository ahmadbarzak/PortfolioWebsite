function getScale(shrinkValue, mobileExpandValue, desktopExpandValue, maxScreenWidth,
    noShrinkLenience, initialScreenSize, mobileWidth, vw, scalarType) {
  const lerp = shrinkValue*(initialScreenSize)/maxScreenWidth;
  const minChange = initialScreenSize < mobileWidth+noShrinkLenience ? 0 : lerp;

  const screenScalar = scalarType==="mobile"?
  mobileExpandValue/(maxScreenWidth-mobileWidth) : 100*vw <= initialScreenSize ?
  shrinkValue/(initialScreenSize-mobileWidth) : desktopExpandValue/(maxScreenWidth-initialScreenSize);

  const mobileScale = Math.max(screenScalar*(100*vw - 400), 0);
  const desktopShrink =  Math.min(screenScalar*(initialScreenSize - 100*vw), minChange);
  const desktopExpand = -Math.max(screenScalar*(100*vw - initialScreenSize), 0);

  return scalarType === "mobile" ? mobileScale : 100*vw <= initialScreenSize ?
  desktopShrink : desktopExpand;
}

export default getScale;