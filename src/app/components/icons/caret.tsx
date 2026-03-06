// editorconfig-checker-disable
type CaretProps = React.SVGProps<SVGSVGElement>;

export const Caret = ({
  width = 20,
  height = 20,
  stroke = "#3D3D3D",
  ...props
}: CaretProps) => (
  <svg
    {...props}
    width={width}
    height={height}
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m1 13 6-6-6-6"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
