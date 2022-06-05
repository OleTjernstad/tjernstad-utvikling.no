import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import { PostLayout } from '../../layout/post';
import { PrivacyPolicyInterface } from '../../contracts/privacy';
import client from '../../client';
import groq from 'groq';
import styles from '../../styles/privacy.module.css';
import { useNextSanityImage } from 'next-sanity-image';

interface ProjectProps {
    privacyPolicy: PrivacyPolicyInterface;
}
export default function Project({ privacyPolicy }: ProjectProps) {
    const imageProps = useNextSanityImage(client, privacyPolicy.logo);

    return (
        <PostLayout>
            <article className={styles.privacy}>
                <div>
                    <h1>{privacyPolicy.title}</h1>
                    <div className={styles.privacyAppLogo}>
                        <Image layout="fixed" {...imageProps} alt="App logo" />
                    </div>

                    <div className={styles.text}>
                        <BlockContent
                            blocks={privacyPolicy.body}
                            projectId={
                                process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                            }
                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        />
                    </div>
                </div>
            </article>
        </PostLayout>
    );
}

export async function getStaticProps(context: {
    params: { slug?: '' | undefined };
}) {
    const { slug = '' } = context.params;
    const privacyPolicy = await client.fetch(
        groq`
            *[_type == "privacyPolicy" && slug.current == $slug][0] {
        body,
        "author": author->name,
        _id,
        publishedAt,
        logo,
        "slug": slug.current,
        title
        }
  `,
        { slug }
    );
    return {
        props: { privacyPolicy } // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
    const privacyPolicies: Array<PrivacyPolicyInterface> =
        await client.fetch(groq`
      *[_type == "privacyPolicy" && publishedAt < now()]|order(publishedAt desc) {
        "slug": slug.current,
        }
    `);

    const paths = privacyPolicies.map((privacyPolicy) => {
        return { params: { slug: privacyPolicy.slug } };
    });

    return {
        paths,
        fallback: false
    };
}
