export const updateSpans = (setSpanDataA, setSpanDataB) => {
    const spansA = document.querySelectorAll('.character-spanA');
    const spansB = document.querySelectorAll('.character-spanB');
  
    const spanInfoA = Array.from(spansA).map(span => {
      const rect = span.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
      };
    });
  
    const spanInfoB = Array.from(spansB).map(span => {
      const rect = span.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
      };
    });
  
    setSpanDataA(spanInfoA);
    setSpanDataB(spanInfoB);
};



export const updateLight = (setLightPoints) => {
  const lightInfo = document.querySelector('.light').getBoundingClientRect();
  const { l, t, w, h } = { l: lightInfo.left, t: lightInfo.top, w: lightInfo.width, h: lightInfo.height }

  const lightData = { 
      a: {x: l+(200/425)*w, y: t},
      b: {x: l+(225/425)*w, y: t},
      c: {x: l, y: t+h},
      d: {x: l+w, y: t+h}
  }
  
  const {a, b, c, d} = lightData;
  const {m1, m2} = {m1: (c.y - a.y)/(c.x - a.x), m2: (b.y - d.y)/(b.x - d.x)}
  const {c1, c2} = {c1: a.y - m1*a.x, c2: b.y - m2*b.x}
  setLightPoints({ m1: m1, c1: c1, m2: m2, c2: c2, ay: a.y, cy: c.y })
};


export const isInLight = (p, {m1, c1, m2, c2, ay, cy}) => {
  return (p.y > m1*p.x + c1 &&
          p.y > m2*p.x + c2 &&
          p.y > ay &&
          p.y < cy);
}