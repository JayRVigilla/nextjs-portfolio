import React from "react";
import "./style.css";
import { Badge } from "./../Badge";

// interface Props {
//   businessName: string;
//   start: string;
//   end: string;
//   description: string;
//   tags: string[];
// }

export const JobCard = ({
  businessName,
  start,
  end,
  description,
  tags,
// }: Props) => {
}) => {
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
    </div>
  );
};
