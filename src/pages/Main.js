import { Component } from 'react';
import { OperationPage, StartPage } from '.';

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
            default:
            // do nothing
        }
    }
}
