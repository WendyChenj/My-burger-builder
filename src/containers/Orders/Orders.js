import React from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import * as actions from '../../store/action/order';

class Orders extends React.Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token);
    }

    render() {

        let order = null;

        

        if (this.props.orders === null) {
            order = <p>No order yet!</p>
        } else {
            order = this.props.orders.map(ord => {
                return <Order key = {ord.id} ingredients = {ord.ingredients} price={ord.price} />
            });
        }

        return (
            <div>
                {order}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        token: state.auth.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Orders);