function WifiIcon({
  width,
  height,
  ...props
}: {
  width: number;
  height: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="#fff"
        d="M13 21l2 2c4.97-4.97 13.03-4.97 18 0l2-2c-6.07-6.07-15.92-6.07-22 0zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2c-3.86-3.86-10.13-3.86-14 0z"
      ></path>
    </svg>
  );
}

export default WifiIcon;
