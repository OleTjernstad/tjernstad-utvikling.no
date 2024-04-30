import Image from "next/image";

interface IconProps {
  name: string;
  showName?: boolean;
}
export function Icon({ name, showName }: IconProps) {
  const nme = name.toLowerCase();
  return (
    <div className={`tech-icon ${showName && "tooltip"}`} data-text={name}>
      <Image src={`/icons/${nme}.svg`} alt="" width={20} height={20} />
    </div>
  );
}
