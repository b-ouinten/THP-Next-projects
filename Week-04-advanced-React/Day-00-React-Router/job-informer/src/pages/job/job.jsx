/* eslint-disable nonblock-statement-body-position */
/* eslint-disable curly */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import "./job.scss";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import jobsAPI from "../../api/jobsAPI";
import storedLatestSearch from "../../data/localStorage";

const Job = () => {
  const { uuid } = useParams();
  const [selectedJob, setSelectedJob] = useState(null);
  const { title, parent_uuid } = selectedJob || {};

  const [parentJob, setParentJob] = useState(null);
  const [jobSkills, setJobSkills] = useState(null);
  const [latestSearchs, setLatestSearchs] = useState(storedLatestSearch);

  const getJob = (id) => jobsAPI.fetchData("jobs/", id)
    .then((result) => result.json())
    .then((job) => setSelectedJob(job));

  const getParentJob = () => jobsAPI.fetchData("jobs/", parent_uuid)
    .then((result) => result.json());

  const getSkills = () => jobsAPI.fetchData("jobs/", `${uuid}/related_skills`)
    .then((result) => result.json());

  useEffect(
    () => {
      getJob(uuid);
    },
    [uuid],
  );

  useEffect(
    () => {
      setLatestSearchs({ ...latestSearchs, [uuid]: title });

      Promise.all([getParentJob(), getSkills()])
        .then((results) => {
          setParentJob(results[0]);
          setJobSkills(results[1]);
        });
    },
    [selectedJob],
  );

  useEffect(
    () => { localStorage.searchs = JSON.stringify(latestSearchs); },
    [latestSearchs],
  );

  return (
    selectedJob
      ? (
        <div className="job">
          <h2>{title}</h2>
          <h3>{parentJob?.title}</h3>
          <p>{parentJob?.description}</p>
          <div className="job__skills">
            { jobSkills
              ? (
                jobSkills.skills.map((skill, index) => (
                  <div className="job__skills__skill" key={index}>
                    <h4>{skill.skill_name}</h4>
                    <p>{skill.description}</p>
                    <Link to={`/skill/${skill.skill_uuid}`}>Show skill details</Link>
                  </div>
                ))
              )
              : "Loading..."}
          </div>
        </div>
      )
      : "Oups! Something is wrong !"
  );
};

export default Job;
