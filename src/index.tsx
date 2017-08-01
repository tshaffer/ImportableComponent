import * as React from 'react';

export interface icProps {
  prop1 : string;
  prop2 : number;
}

export default class ImportableComponent extends React.Component<icProps, object> {

  render() {

    console.log('ImportableComponent:: RENDER INVOKED');

    return (
      <div>
        <div>importableComponent</div>
      </div>
    );
  }
}
