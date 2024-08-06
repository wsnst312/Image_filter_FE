import React from 'react';

const ImageFilters = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };
  const FILTER_TYPES = {
    GRAYSCALE: 'grayscale(100%)',
    NONE: 'none',
    SEPIA: 'sepia(100%)',
  };
  

  return (
    <div className="image-filters">
      <label>
        <input
          type="radio"
          name="filter"
          value={FILTER_TYPES.GRAYSCALE}
          onChange={handleFilterChange}
        />
        Grayscale
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value={FILTER_TYPES.SEPIA}
          onChange={handleFilterChange}
        />
        Sepia
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          defaultChecked
          value={FILTER_TYPES.NONE}
          onChange={handleFilterChange}
        />
        None
      </label>
    </div>
  );
};

export default ImageFilters;
