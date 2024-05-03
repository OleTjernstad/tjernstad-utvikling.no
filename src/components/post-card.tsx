import { DateIcon } from "@/icons/date";
import { Icon } from "./icon";
import Image from "next/image";
import Link from "next/link";
import { UpdateIcon } from "@/icons/update";
import { format } from "date-fns";
import { shuffle } from "@/utils/shuffle";

interface PostCardProps {
  post: {
    frontmatter: {
      [key: string]: any;
    };
    slug: string;
  };
}

export function PostCard({ post }: PostCardProps) {
  const tech = shuffle(post.frontmatter?.tech ?? []);
  return (
    <article className="post card-stack post-card card-border-radius ">
      <Link href={`posts/${post.slug}`} className="">
        <div className="image-wrapper">
          <Image
            width={200}
            height={200}
            className="image card-border-radius-top"
            src={`/images/posts/${post.frontmatter?.image}`}
            alt={`illustrasjonsbilde av ${post.frontmatter?.title}`}
          />
        </div>
        <div className="text-wrapper card-column">
          <div className="date-row">
            <time
              dateTime={post.frontmatter?.date}
              title={`Innlegget ble publisert første gang, ${format(
                post.frontmatter?.date,
                "dd.MM.yyyy"
              )}`}
            >
              <DateIcon />
              {format(post.frontmatter?.date, "dd.MM.yyyy")}
            </time>

            {post.frontmatter?.update ? (
              <>
                <time
                  className="updated"
                  dateTime={post.frontmatter?.date}
                  title={`Innlegg er endret, ${format(
                    post.frontmatter?.update,
                    "dd.MM.yyyy"
                  )}`}
                >
                  (<UpdateIcon />
                  {format(post.frontmatter?.update, "dd.MM.yyyy")})
                </time>
              </>
            ) : null}
          </div>
          <h3>{post.frontmatter.title}</h3>

          <div className="tech-icons">
            {tech
              ? tech
                  ?.slice(0, 4)
                  ?.map((tech: string) => (
                    <Icon name={tech} key={tech} showName />
                  ))
              : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
