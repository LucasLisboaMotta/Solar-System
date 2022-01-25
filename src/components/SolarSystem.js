import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="sistema-solar">
          {planets.map(({ image, name, classe }) => (<PlanetCard
            key={ name }
            classe={ classe }
            planetImage={ image }
            planetName={ name }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
