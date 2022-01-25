import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, classe } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name" className="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className={ classe } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
  classe: PropTypes.string.isRequired,
};

export default PlanetCard;
