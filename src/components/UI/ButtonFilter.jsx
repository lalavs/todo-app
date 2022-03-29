import React, {useState} from 'react';

import './button-filter.scss';

const ButtonFilter = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <button
      className={isActive ?
        'button-filter button-filter__active' :
        'button-filter'}
      onClick={toggleClass}
    />
  );
};

export default ButtonFilter;
