import { useState } from 'react';

const Square = () => {
  const [value, setValue] = useState<string | null>(null);

  const handleClick = () => {
    setValue('☓');
  };

  return (
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
