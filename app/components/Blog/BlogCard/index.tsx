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
  readTimeInMinutes: number;
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
    readTimeInMinutes: readTime,
    coverImage: { url: imageUrl, photographer },
  } = blog;

  return (
    <article className={`root BlogCard ${imageLeft && "image-left"}`}>
      <div className="title-container">
        <a href={url} target="_blank" rel="noreferrer">
          <h3>{title}</h3>
        </a>
        <Image src={imageUrl} alt={slug} width={400} height={250} />
      </div>
      <p>{brief}</p>
    </article>
  );
};
