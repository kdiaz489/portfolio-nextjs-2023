import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: "VagRoundedRegular";
        src: url("../fonts/VAGRoundedRegular.ttf") format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      `}
  />
);

export default Fonts;
