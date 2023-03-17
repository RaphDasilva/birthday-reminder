import React from 'react';
import PropTypes from 'prop-types';

const List = ({ people }) => (
  <>
    {
      people.map((person) => {
        const {
          id, name, age, image,
        } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>
                {age}
                {' '}
                years
              </p>
            </div>

          </article>
        );
      })
    }
  </>
);

List.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default List;
