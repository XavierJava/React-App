import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class Index extends Component {
  render() {
    return (
      <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>
    );
  }
}

export default Index;