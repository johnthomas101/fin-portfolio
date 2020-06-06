import React, { Component } from 'react';
import './StockTable.css';
import axios from 'axios';

import { initStock, deleteStock } from '../../actions/rootActions';
import { connect } from 'react-redux';

// const selectedStockData = [
//     {
//         symbol: "A",
//         name: "A",
//         no: 10,
//         buy: 200,
//         curr: 100,
//         profit: 20
//     }, {
//         symbol: "B",
//         name: "B",
//         no: 10,
//         buy: 200,
//         curr: 100,
//         profit: 20
//     }, {
//         symbol: "C",
//         name: "C",
//         no: 10,
//         buy: 200,
//         curr: 100,
//         profit: 20
//     },
// ];

class StockTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleDelete(key){
        console.log(key);
        let url = "https://finportfolio-5dbdc.firebaseio.com/mystocks/" + key + '.json';
        axios.delete(url).then( (response)=>{
            // Remove from redux store also
            debugger
            this.props.deleteStock({
                key: key
            })
        })
    }
    componentDidMount() {
        let url = "https://finportfolio-5dbdc.firebaseio.com/mystocks.json"
        let myArr = [];
        axios.get(url).then((response) => {
            console.log(response);
            if (response.data) {
                for (let [key, value] of Object.entries(response.data)) {
                    // console.log(`${key}: ${value}`);
                    value['key'] = key;
                    myArr.push(value);
                }
                this.props.initStock({
                    stocks: [...myArr]
                })
            }
        });
    }
    render() {
        return (<div className="tableMainContainer">
            <div className="tableHeader">
                Stocks Table
        </div>

            <div className="tableContainer">
                {
                    this.props.myStocks.length ?
                        <table>
                            <tr>
                                <th>Stock Symbol</th>
                                <th>Stock Name</th>
                                <th>No. of shares</th>
                                <th>Buy Price</th>
                                <th>Current Price</th>
                                <th>Profit/ Loss</th>
                                <th>Action</th>
                            </tr>
                            {
                                this.props.myStocks.map((obj) => (
                                    <tr>
                                        <td>
                                            {obj.symbol}
                                        </td>
                                        <td>
                                            {obj.name}
                                        </td>
                                        <td>
                                            {obj.count}
                                        </td>
                                        <td>
                                            {obj.price}
                                        </td>
                                        <td>
                                            {obj.curr}
                                        </td>
                                        <td>
                                            {obj.profit}
                                        </td>
                                        <td onClick={()=>this.handleDelete(obj.key)}>
                                            Action
                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                        : "No stocks selected"
                }
            </div>
        </div>);
    }
}

const mapDispatchToProps = dispatch => ({
    initStock: (obj) => dispatch(initStock(obj)),
    deleteStock: (obj) => dispatch(deleteStock(obj)),
})

const mapStateToProps = state => ({
    myStocks: state.myStocks,
})

export default connect(mapStateToProps, mapDispatchToProps)(StockTable);