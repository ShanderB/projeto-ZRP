import React from 'react';
import './Pagination.css'

import { PaginationProps } from '../../interfaces/Pagination';

const Pagination: React.FC<PaginationProps> = ({ nextUrl, prevUrl, fetchData, API }) => {
  return (
    <div className="button-container">
      <button className="fetch-button" onClick={() => fetchData(API)} hidden={!!nextUrl || !!prevUrl}>Fetch</button>
      <button className="next-button" onClick={() => nextUrl && fetchData(nextUrl)} hidden={!nextUrl}>Next</button>
      <button className="prev-button" onClick={() => prevUrl && fetchData(prevUrl)} hidden={!prevUrl}>Previous</button>
    </div>
  );
};

export default Pagination;