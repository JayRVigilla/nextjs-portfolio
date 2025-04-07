import React from "react";
import "./style.css";
import { Badge } from "../Badge";
import Link from "next/link";
import { LinkData } from "@/app/types";
import { iExperience } from "@/app/content";
import Image from "next/image";

interface Props {
  job: iExperience;
}

export const JobCard = ({ job }: Props) => {
  const { businessName, start, end, description, tags, links, img } = job;

  return (
    <article className="root job-card">
      <div className="details">
        <div className="basics">
          <span>
            <h3> {businessName}</h3>
            <p>
              <em>
                {start} - {end}
              </em>
            </p>
          </span>
          <p className="description">{description}</p>
        </div>
        {img && (
          <Image src={img?.src} alt={img?.alt} width={150} height={100} />
        )}
      </div>
      <div className="links">
        {links?.length &&
          links.map((link) => {
            return (
              <Link
                href={link.href}
                rel="noreferrer"
                target="_blank"
                key={link.text}
              >
                {link.text}
              </Link>
            );
          })}
      </div>

      {/* <div className="tags">
        {tags.map((tag) => (
          <Badge title={tag} key={`${tag}-${businessName}`} />
        ))}
      </div> */}
    </article>
  );
};
