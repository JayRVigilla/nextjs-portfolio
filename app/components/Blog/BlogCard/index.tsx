/** BlogCard documentation
 */
import React from "react";
import Image from "next/image";
import "./styles.css";

type tBlogImage = {
  url: string;
  photographer: string;
};

type tBlog = {
  id: string;
  title: string;
  url: string;
  brief: string;
  slug: string;
  coverImage: tBlogImage;
};

export interface BlogCardProps {
  "data-test-id"?: string;
  blog: tBlog;
  imageLeft?: boolean;
}

export const BlogCard = ({ blog, imageLeft = false }: BlogCardProps) => {
  const {
    title,
    url,
    brief,
    slug,
    coverImage: { url: imageUrl },
  } = blog;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <article className="root BlogCard">
        <h3>{title}</h3>
        <div className={`container ${imageLeft && "image-left"}`}>
          <Image src={imageUrl} alt={slug} width={300} height={200} />
          <p>{brief}</p>
        </div>
      </article>
    </a>
  );
};
