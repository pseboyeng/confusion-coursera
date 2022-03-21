import React,{ Component } from 'react';
import { Card } from 'reactstrap';

class CardComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Card>
                    {this.props.children}
                </Card>
        );
    }
}

export default CardComponent; 