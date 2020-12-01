/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './sources.scss';
import React from 'react';
import { connect } from 'react-redux';
import { fetchSources } from '../../redux';

const mapStateToProps = (state) => ({
  newsState: state.newsState,
  sourcesState: state.sourcesState,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingSources: (criteria) => dispatch(fetchSources(criteria)),
});

const Sources = ({ sourcesState: { sources, error }, fetchingSources, onSelect }) => {
  const handleClick = () => fetchingSources('sources?sortBy=name');

  return (
    <>
      <button className="update-sources" type="button" onClick={handleClick}>Update news sources</button>
      {
        sources.length > 0
          ? (
            <select onChange={onSelect} defaultValue="">
              <option value="">Select source</option>
              {
                sources.map(({ id, name }) => <option key={id} value={id}>{name}</option>)
              }
            </select>
          )
          : <p>No result !</p>
      }
      {
        error && (<p>{'Can\'t update !'}</p>)
      }
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
