import React from 'react';
import { Link } from 'react-router';
import SaltyMeter from './SaltyMeter';
import LatestResults from './LatestResults';


export default ({ players, games }) => (
  <div className="block-wrapper">
    <SaltyMeter players={players} />
    <LatestResults games={games} />
  </div>
);
