import Image from "next/image";
import "./styles.scss";

interface IIcon {
  svg: string;
  className?: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: string;
  onClick?: () => void;
}

function Icon({ svg, alt, width, height, layout, className, onClick }: IIcon) {
  return (
    <Image
      src={svg}
      width={width}
      height={height}
      alt={`${alt} svg`}
      className={`icon ${className ? className : ""}`}
      onClick={onClick}
    />
  );
}

export default Icon;
