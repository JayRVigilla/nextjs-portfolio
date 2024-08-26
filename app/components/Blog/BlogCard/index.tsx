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

export const BlogCard = ({ blog, imageLeft=false }: BlogCardProps) => {
  const {
    id,
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
        <a href="">
          <h3>{title}</h3>
        </a>
      <Image src={imageUrl} alt={slug} width={150} height={150} />
      </div>
      <p>{brief}</p>
    </article>
  );
};
