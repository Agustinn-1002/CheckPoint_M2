import React, { Component } from 'react';
import {connect} from 'react-redux'

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  render() {
    return (
     <h1>Home</h1>
      )
  }
}

export const mapStateToProps = undefined;

export const mapDispatchToProps = undefined;

export default connect(mapStateToProps,mapDispatchToProps)(Home)
