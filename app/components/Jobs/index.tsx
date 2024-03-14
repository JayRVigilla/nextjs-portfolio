import { experienceContent } from "@/app/content"
import { JobCard } from "../JobCard"
import Image from 'next/image'
import cuttingboard from "@/public/cuttingboard.jpg"
import './Jobs.css'

export const Jobs = () => {
  return (
    <>
    <section className="jobs">
        <Image
          src={cuttingboard}
          alt="wood cutting board background image"
          priority
          placeholder="blur"
        />
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
            </>
  )
}