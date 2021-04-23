import React, { Component } from 'react';
import tableau from 'tableau-api';
 
 
class GetData extends Component {
  componentDidMount() {
    this.initViz()
  }
 
 
  initViz() {
    const vizUrl = 'https://public.tableau.com/views/USHouseholdCarbonFootprintbyZIpCode/Sheet2?:language=en&:display_count=y&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }
 
 
  render() {
    return (
      <div ref={(div) => { this.vizContainer = div }}>
      </div>
    )
  }
}
 
 
export default GetData;