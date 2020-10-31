import "./home.css";
import React, { useState, useEffect } from "react";
import { AutoComplete, Input } from "antd";
import { useDebounce } from "use-debounce";
import { Link } from "react-router-dom";
import jobsAPI from "../../api/jobsAPI";

const Home = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm] = useDebounce(inputValue, 250);

  const handleSearch = (searchText) => {
    if (searchText.length < 3) {
      setOptions([]);
      return;
    }

    jobsAPI.fetchData("jobs/", `autocomplete?contains=${searchText}`)
      .then((result) => result.json())
      .then((jobs) => {
        setOptions(
          jobs.map((job) => ({
            label: (
              <Link to={`job/${job.uuid}`}>{job.suggestion}</Link>
            ),
          })),
        );
      })
      .catch(() => setOptions([]));
  };

  const handleChange = (input) => {
    setInputValue(input);
  };

  useEffect(
    () => { handleSearch(searchTerm); },
    [searchTerm],
  );

  return (
    <div className="container">
      <h1>Job Searcher</h1>
      <AutoComplete
        value={inputValue}
        dropdownMatchSelectWidth={252}
        style={{
          width: "50vw",
        }}
        options={options}
        onChange={handleChange}
      >
        <Input.Search size="large" placeholder="input here" enterButton />
      </AutoComplete>
    </div>
  );
};

export default Home;
