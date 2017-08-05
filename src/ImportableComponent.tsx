import * as React from 'react';

export interface icProps {
  label1 : string;
  label2 : string;
}

export default class ImportableComponent extends React.Component<icProps, object> {

  constructor(props : any) {
    super(props);
    console.log(props);
  }

  render() {

    console.log('ImportableComponent:: RENDER INVOKED');

    console.log(this.props);

    if (!this.props.label1 || this.props.label1 === '') {
      return null;
    }

    if (!this.props.label2 || this.props.label2 === '') {
      return null;
    }

    return (
      <div>
        <div>
          Eat Pizza Every Day!
          <br/>
          <span>{this.props.label1}</span>
          <br/>
          <span>{this.props.label2}</span>
          <br/>
        </div>
      </div>
    );
  }
}
