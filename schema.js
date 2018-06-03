/* @flow */

import classification from './classification';

export default [
  {
    id: 'name',
    label: 'Name',
    show: true,
    sample: 'Oslo',
    align: 'left',
  },
 {
    id: 'rating',
    label: 'Rating',
    type: 'rating',
    show: true,
    sample: 4,
  },
  {
    id: 'comments',
    label: 'Comments',
    type: 'text',
    sample: 'Possesses interesting museums of nordic culture',
  },
]
