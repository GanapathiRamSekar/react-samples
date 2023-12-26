/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class GroupingAggregate extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'grouping-aggregate.rdl'}
                    toolbarSettings={Globals.TOOLBAR_OPTIONS}
                    toolBarItemClick={Globals.EDIT_REPORT}>
                </BoldReportViewerComponent>)
        }
        else {
            return (
                <div id="description">
                    <p>
                        The Grouping Aggregate RDL report is designed with the <b>Grouping</b> and <b>Total</b> concept to organize and
                        summarize the data using Tablix data region.
                    </p>
                    <p>
                        It breaks the information down into quarterly intervals, so that you can analyze the information according to
                        the order year.
                    </p>
                    <ul>
                        <li><b>Row grouping</b> is used to group the data based on quarterly sale.</li>
                        <li>Using the <code>Total</code> feature, the total sales amount for each quarter and year is calculated in
                            Tablix data region.</li>
                        <li>The sales value for each quarter is formatted in the <code>Currency </code> <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/format-data/"
                            target="_blank" rel="noreferrer">format</a> to improve the readability of report.</li>
                    </ul>
                    <p>
                        More information about the Tablix data region can be found in this <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank" rel="noreferrer">documentation</a> section.
                    </p>
                </div>
            );
        }
    }
}
export default GroupingAggregate;