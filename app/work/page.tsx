import { experienceContent } from "@/app/content"
import { JobCard } from "@components/JobCard"
import './Jobs.css'

export default function Jobs(){
  return (
    <section className="jobs">
        <div className="content">

          <h2>Experience</h2>
          <div className='job-cards'>
            {experienceContent.map((job) => {
              return <JobCard
              businessName={job.businessName}
              start={job.start}
              end={job.end}
              description={job.description}
              tags={job.tags}
              press={job.press}
              key={`job-card-${job.businessName.toLowerCase()}`}
              />
            })}
            </div>
          </div>
        </section>
  )
}