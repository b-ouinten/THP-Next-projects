/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import "./skill.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jobsAPI from "../../api/jobsAPI";

const Skill = () => {
  const { skill_uuid } = useParams();
  const [skillsJobs, setSkillsJobs] = useState(null);
  const { skill_name, jobs } = skillsJobs || {};

  const getSkillJobs = () => jobsAPI.fetchData("skills/", `${skill_uuid}/related_jobs`)
    .then((result) => result.json())
    .then((jobsFound) => setSkillsJobs(jobsFound));

  useEffect(
    () => getSkillJobs(),
    [skill_uuid],
  );

  return (
    skillsJobs
      ? (
        <div className="skillsJobs">
          <h3>
            These are all the jobs that require the skill of
            {" "}
            <strong>{skill_name}</strong>
          </h3>
          <ul>
            {
                  jobs.map((job, index) => <li key={index}>{job.job_title}</li>)
                }
          </ul>
          <div />
        </div>
      )
      : "Loading..."
  );
};

export default Skill;
