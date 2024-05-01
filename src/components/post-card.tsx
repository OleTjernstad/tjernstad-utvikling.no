import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: {
    frontmatter: {
      [key: string]: any;
    };
    slug: string;
  };
}

export function PostCard({ post }: PostCardProps) {
  // const tech = shuffle(project.frontmatter?.lang);
  return (
    <article className="post card-stack card-bg post-card">
      <Link href={`posts/${post.slug}`} className="">
        <div className="image-wrapper">
          <Image
            width={200}
            height={200}
            className="image"
            src={`/images/posts/${post.frontmatter?.image}`}
            alt={`illustrasjonsbilde av ${post.frontmatter?.title}`}
          />
        </div>
        <div className="text-wrapper">
          {/* <div className="tech-icons">
            {tech?.slice(0, 4).map((lang: string) => (
              <Icon name={lang} key={lang} showName />
            ))}
          </div> */}

          <h3>{post.frontmatter.title}</h3>
        </div>
      </Link>
    </article>
  );
}
