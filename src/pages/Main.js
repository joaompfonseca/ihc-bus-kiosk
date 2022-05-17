import { Component } from 'react';
import { StartPage, OperationPage, TicketsPage, PassesPage } from '.';

export default class Main extends Component {

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
                return (<StartPage
                    goto={this.goto}
                />);
            case 'operation':
                return (<OperationPage
                    goto={this.goto}
                />);
            case 'tickets':
                return (<TicketsPage
                    goto={this.goto}
                />);
            case 'passes':
                return (<PassesPage
                    goto={this.goto}
                />);
            default:
            // do nothing
        }
    }
}
