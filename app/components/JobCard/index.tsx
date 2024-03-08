import React from "react";
import "./style.css";
import { Badge } from "../Badge";

interface Props {
  businessName: string;
  start: string;
  end: string;
  description: string;
  press?: string;
  tags: string[];
}

export const JobCard = ({
  businessName,
  start,
  end,
  description,
  tags,
press
}: Props) => {
// }) => {
  return (
    <div className="root job-card">
      <h3> {businessName}</h3>
      <p>
        <em>
          {start} - {end}
        </em>
      </p>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag) => (
          <Badge title={tag} key={`${tag}-${businessName}`} />
          ))}
      </div>
      {press && <a href={press} rel="noreferrer" target="_blank" >Press Link</a>}
    </div>
  );
};
