"use client"
/** blog documentation
 */
import React, { useEffect, useState } from "react";

import "./styles.css";
import { BlogCard } from "./BlogCard";

export interface BlogProps {
  "data-test-id"?: string;
}

async function gql(query: string, variables = {}) {
  const data = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  return data.json();
}

const GET_USER_ARTICLES = `
  query {
    publication(id: "6205f0cd9e350308247fe898") {
      posts(first:3){
      edges{
        node{
          id
          title,
          url,
          brief,
          slug,
          readTimeInMinutes
          coverImage {
            url,
            photographer
          }
        }
      }
    }
    }
  }`;

export const Blog = () => {
  // * hooks
  // const hook = () => {};

  // * state
  const [blogs, setBlogs] = useState<any[]>([]);

  // * useEffects
  useEffect(() => {
    const fetchBlogs = async() => {
      const response = await gql(GET_USER_ARTICLES)

      const {
        data: {
          publication: {
            posts: { edges },
          },
        },
      } = response;

      const receivedBlogs = []
      for (let edge of edges) {
        receivedBlogs.push(edge.node)
      }
      setBlogs(receivedBlogs)
    }
    fetchBlogs()
  }, []);

  return (
    <section className="root Blog">
      <h2>blog</h2>
      <div className="card-container">
        Cards go here
        {blogs.length && (blogs.map((blog, index) => {
          return <BlogCard
            blog={blog} key={blog.id} imageLeft={ index === 0 || index % 2 === 0} />})
        )}
      </div>

      <p>
        {`Check out more at my blog:`}
        <a
          href="https://babbledotlog.jayvigilla.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          babble.log()
        </a>
      </p>
    </section>
  );
};
