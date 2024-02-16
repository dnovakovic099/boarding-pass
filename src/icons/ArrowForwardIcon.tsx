function ArrowForwardIcon({
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
      viewBox="0 0 32 30"
      {...props}
    >
      <path
        fill="#fff"
        d="M8.097 25.288l2.3 2.212L23.396 15 10.398 2.5l-2.3 2.213L18.793 15 8.097 25.288z"
      ></path>
    </svg>
  );
}

export default ArrowForwardIcon;
