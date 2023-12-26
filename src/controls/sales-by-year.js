/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class SalesByYear extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'sales-by-year.rdlc'}
                    reportLoaded={Globals.onReportLoaded}
                    processingMode={'Local'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        The sales by year RDLC report represents the sales of North America countries in each year using <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank" rel="noreferrer">Tablix</a> and <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/chart/" target="_blank" rel="noreferrer">Chart </a>
                        report items.
                    </p>
                    <ul>
                        <li>The Row grouping feature is used to group the sales by year and the Column grouping feature is used to group
                            Region and Country. More information about Grouping Panel can be found in this <a
                                href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/grouping-panel/"
                                target="_blank" rel="noreferrer">documentation</a> section.</li>
                        <li>Aggregate functions are used to calculate the total sales in each countries.</li>
                        <li><a href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/sort-data-in-tablix-data-region/"
                            target="_blank" rel="noreferrer">Sorting</a> is applied to row groups to sort the sales year.</li>
                    </ul>
                    <p>
                        More information about RDLC report can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-viewer/rdlc-report/" target="_blank" rel="noreferrer">documentation </a>
                        section.
                    </p>
                </div>
            );
        }
    }
}
export default SalesByYear;