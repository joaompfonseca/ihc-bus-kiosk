import { Component } from 'react';
import { StartPage, OperationPage, TicketsPage, PassesPage } from '.';

export default class Main extends Component {

    /**
     * Possible states:
     * 
     * start - StartPage
     * operation - OperationPage
     * tickets - TicketsPage
     * passes - PassesPage
     * monthlyNormal - MonthlyNormalPage
     */
    state = {
        page: 'start'
    }

    goto = (page) => e => {
        this.setState({ page: page })
    }

    render() {
        const { page } = this.state;

        console.log("Current Page: " + this.state.page); /* Debugging */

        switch (page) {
            case 'start':
                return (<StartPage goto={this.goto} />);
            case 'operation':
                return (<OperationPage goto={this.goto} />);
            case 'tickets':
                return (<TicketsPage goto={this.goto} />);
            case 'passes':
                return (<PassesPage goto={this.goto} />);
            case 'helpRechargablePass':
                break;
            /**
             * Tickets
             */
            case 'single':
                break;
            case 'rechargeable':
                break;
            case 'fullDay':
                break;
            case 'recharge':
                break;
            /**
             * Passes
             */
            case 'monthlyNormal':
                break;
            case 'monthlyStudent':
                break;
            case 'renew':
                break;
            default:
            // do nothing
        }
    }
}
