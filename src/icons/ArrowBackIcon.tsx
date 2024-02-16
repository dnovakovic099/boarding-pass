function ArrowBackIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <g filter="url(#filter0_d_16_1066)">
        <path
          fill="#fff"
          d="M26.667 14.667H10.44l7.453-7.454L16 5.333 5.333 16 16 26.667l1.88-1.88-7.44-7.454h16.227v-2.666z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_16_1066"
          width="22.333"
          height="22.333"
          x="5.333"
          y="5.333"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="0.5" dy="0.5"></feOffset>
          <feGaussianBlur stdDeviation="0.25"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_16_1066"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_16_1066"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default ArrowBackIcon;
