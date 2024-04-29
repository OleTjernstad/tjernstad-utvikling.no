import Image from "next/image";

interface HeaderProps {
  imageName?: string;
  path?: string;
}

export function Header({ imageName, path }: HeaderProps) {
  return (
    <header>
      {imageName && path ? (
        <Image
          width={200}
          height={200}
          className="image"
          src={`${path}${imageName}`}
          alt=""
        />
      ) : null}
      <div>
        <span>Tjernstad Utvikling</span>
      </div>
      <div></div>
    </header>
  );
}
