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
    <article className={`root BlogCard ${imageLeft && "image-left"}`}>
      <div className="title-container">
        <a href={url} target="_blank" rel="noreferrer">
          <h3>{title}</h3>
        </a>
        <Image src={imageUrl} alt={slug} width={300} height={200} />
      </div>
      <p>{brief}</p>
    </article>
  );
};
