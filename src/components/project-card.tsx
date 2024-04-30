import { Icon } from "./icon";
import Image from "next/image";
import Link from "next/link";
import { shuffle } from "@/utils/shuffle";

interface ProjectCardProps {
  project: {
    frontmatter: {
      [key: string]: any;
    };
    slug: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const tech = shuffle(project.frontmatter?.lang);
  return (
    <Link href={`projects/${project.slug}`}>
      <article className="project">
        <div className="image-wrapper">
          <Image
            width={200}
            height={200}
            className="image"
            src={`/images/projects/${project.frontmatter.image}`}
            alt={`illustrasjonsbilde av ${project.frontmatter.title}`}
          />
        </div>
        <div className="text-wrapper">
          <div className="tech-icons">
            {tech?.slice(0, 4).map((lang: string) => (
              <Icon name={lang} key={lang} showName />
            ))}
          </div>

          <h3>{project.frontmatter.title}</h3>
        </div>
      </article>
    </Link>
  );
}
