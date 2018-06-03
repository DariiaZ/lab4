/* @flow */

'use strict';

import CRUDStore from './flux-imm/CRUDStore';
import React from 'react';
import ReactDOM from 'react-dom';
import Cities from './components/Cities';
import schema from './schema';

CRUDStore.init(schema);

ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo /> Welcome to Cities!
    </div>
    <Cities/>
  </div>,
  document.getElementById('pad')
);
