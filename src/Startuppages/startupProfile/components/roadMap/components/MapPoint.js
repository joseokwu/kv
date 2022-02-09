export const MapPoint = ({ color = "#D5D5D5", withStem = true }) => {
  return (
    <svg
      width="32"
      height="67"
      viewBox="0 0 32 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="31" rx="15.5" fill={color} />
      <path
        d="M13.751 18.2191L10.8248 15.2929L9.82837 16.2823L13.751 20.2049L22.1715 11.7843L21.1821 10.7949L13.751 18.2191Z"
        fill="white"
      />
      {withStem && (
        <path
          d="M17 67L17 31H15L15 67H17ZM15 31L15 67H17L17 31H15Z"
          fill={color}
        />
      )}
    </svg>
  );
};
