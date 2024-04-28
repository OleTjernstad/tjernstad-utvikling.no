import Image from "next/image";

interface IconProps {
  name: string;
}
export function Icon({ name }: IconProps) {
  const nme = name.toLowerCase();
  return <Image src={`/icons/${nme}.svg`} alt={name} width={20} height={20} />;
}
