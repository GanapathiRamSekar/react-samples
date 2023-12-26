/* eslint-disable */
import React, { Component } from 'react';
import { Globals } from '../globals';

class ConsolidatedBalanceSheet extends Component {
    render() {
        if (this.props.content !== 'desc') {
            return (
                <BoldReportViewerComponent
                    id="report-viewer"
                    reportServiceUrl={Globals.ServiceURL}
                    reportPath={'consolidated-balance-sheet.rdlc'}
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
                        Consolidated balance sheet RDLC report represents the assets and liabilities of a company and all subsidiaries
                        for the last four quarters in a single sheet using <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/"
                            target="_blank" rel="noreferrer">Tablix</a> report item.
                    </p>
                    <ul>
                        <li>The <a href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/report-items/tablix/grouping-panel/"
                            target="_blank" rel="noreferrer">Row grouping</a> feature is used to group the Assets type.</li>
                        <li>Text box report items with currency value are formatted using <a
                            href="https://help.boldreports.com/embedded-reporting/react-reporting/report-designer/designer-guide/compose-report/properties-panel/#set-expression"
                            target="_blank" rel="noreferrer">expression</a>.</li>
                        <li>The data used in this table is a local JSON data.</li>
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
export default ConsolidatedBalanceSheet;