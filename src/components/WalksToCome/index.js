import React from 'react';

import WalkToComeSmall from 'src/components/WalksToCome/WalkToComeSmall';

import './walksToCome.scss';

const WalksToCome = () => (
  <main className="walks_to_come">
    <h2 className="walks_to_come_title">Mes randonnées à venir</h2>
    <div className="walks_to_come_list">
      <WalkToComeSmall />
      <WalkToComeSmall />
      <WalkToComeSmall />
      <WalkToComeSmall />
    </div>
  </main>
);

export default WalksToCome;
