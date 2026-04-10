import { useEffect } from "react";

const CRTEffects = () => {
  useEffect(() => {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.createImageData(size, size);
    const strength = 0.08;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const nx = (x / (size - 1)) * 2 - 1; // -1 to 1
        const ny = (y / (size - 1)) * 2 - 1;
        const r2 = nx * nx + ny * ny;

        // Barrel: push pixels outward from center
        const dx = nx * r2 * strength;
        const dy = ny * r2 * strength;

        const i = (y * size + x) * 4;
        imageData.data[i] = Math.max(0, Math.min(255, Math.round(128 + dx * 127)));
        imageData.data[i + 1] = Math.max(0, Math.min(255, Math.round(128 + dy * 127)));
        imageData.data[i + 2] = 0;
        imageData.data[i + 3] = 255;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    const dataURL = canvas.toDataURL("image/png");
    const el = document.getElementById("barrel-map");
    if (el) el.setAttribute("href", dataURL);
  }, []);

  return (
    <svg
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <filter
          id="crt-effects"
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
          colorInterpolationFilters="sRGB"
        >
          {/* Barrel distortion */}
          <feImage id="barrel-map" preserveAspectRatio="none" result="disp-map" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="disp-map"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
            result="barrel"
          />

          {/* Chromatic aberration — split R/G/B and offset */}
          <feColorMatrix in="barrel" type="matrix"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="r-ch" />
          <feOffset in="r-ch" dx="-1" dy="0" result="r-off" />

          <feColorMatrix in="barrel" type="matrix"
            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="g-ch" />

          <feColorMatrix in="barrel" type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
            result="b-ch" />
          <feOffset in="b-ch" dx="1" dy="0" result="b-off" />

          <feBlend in="r-off" in2="g-ch" mode="screen" result="rg" />
          <feBlend in="rg" in2="b-off" mode="screen" />
        </filter>
      </defs>
    </svg>
  );
};

export default CRTEffects;
