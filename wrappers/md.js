import React from 'react';
import GuideTemplate from '../components/guideTemplate';


export default class Layout extends React.Component {
  render () {
    return <GuideTemplate page={this.props.route.page} />;
  }
}


Layout.propTypes = {
  route: React.PropTypes.object,
};

