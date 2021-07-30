import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import { PostLayout } from '../../layout/post';
import { ProjectInterface } from '../../contracts/project';
import client from '../../client';
import groq from 'groq';
import styles from '../../styles/project.module.css';
import { useNextSanityImage } from 'next-sanity-image';

interface ProjectProps {
    project: ProjectInterface;
}
export default function Project({ project }: ProjectProps) {
    const imageProps = useNextSanityImage(client, project.mainImage);

    return (
        <PostLayout>
            <article className={styles.project}>
                <figure>
                    <Image
                        layout="responsive"
                        {...imageProps}
                        alt={project.mainImage.caption}
                    />
                    <figcaption>- {project.mainImage.caption}</figcaption>
                </figure>
                <h1>{project.title}</h1>
                <div className={styles.body}>
                    <BlockContent
                        blocks={project.body}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    />
                    <aside>
                        Prosjektet er utviklet med:
                        <ul>
                            {project.technologies &&
                                project.technologies.map((technology) => (
                                    <li key={technology}>{technology}</li>
                                ))}
                        </ul>
                    </aside>
                </div>
            </article>
        </PostLayout>
    );
}

export async function getStaticProps(context: {
    params: { slug?: '' | undefined };
}) {
    const { slug = '' } = context.params;
    const project = await client.fetch(
        groq`
            *[_type == "project" && slug.current == $slug][0] {
        body,
        "name": author->name,
        "technologies": technology[]->title,
        _id,
        publishedAt,
        mainImage,
        "slug": slug.current,
        title
        }
  `,
        { slug }
    );
    return {
        props: { project } // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
    const projects: Array<ProjectInterface> = await client.fetch(groq`
      *[_type == "project" && publishedAt < now()]|order(publishedAt desc) {
        "slug": slug.current,
        }
    `);

    const paths = projects.map((project) => {
        return { params: { slug: project.slug } };
    });

    return {
        paths,
        fallback: false
    };
}
