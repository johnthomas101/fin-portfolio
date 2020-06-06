import React, { Component } from 'react';
import './StockSelector.css';
import { showModal, updateSymName } from '../../actions/rootActions';
import axios from 'axios';
import { connect } from 'react-redux';


class StockSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickers: []
        }
    }

    componentDidMount() {
        axios.get('https://finportfolio-5dbdc.firebaseio.com/tickers.json').then((response) => {
            console.log(response);
            this.setState({
                tickers: [...response.data]
            })
        });



        // axios.get('https://finportfolio-5dbdc.firebaseio.com/mystocks.json').then((response)=>{
        //     console.log(response);
        // });

        // axios.patch('https://finportfolio-5dbdc.firebaseio.com/mystocks/-M9-7Om26IIXxj91y-nT.json', {symbol: "B"}).then((response)=>{
        //     console.log(response);
        // });
    }

    showModalHandler(obj) {
        this.props.showModal();
        this.props.updateSymName(obj)
    }

    render() {
        return (<div className="tickerMainContainer">
            <div className="tickerHeader">
                Add Stocks
            </div>
            <div className="tickerContainer">
                {
                    this.state.tickers.map((obj) => {
                        if (obj.symbol == "MSFT")
                            return null
                        else {
                            return <div className="tickerItem">
                                <div
                                    onClick={() => this.showModalHandler(obj)}
                                    className="tickerItemSymbol">
                                    {obj.symbol}
                                </div>
                                <div className="tickerItemText">
                                    {obj.name}
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </div>);
    }
}
const mapDispatchToProps = dispatch => ({
    showModal: (obj) => dispatch(showModal(obj)),
    updateSymName: (obj) => dispatch(updateSymName(obj)),
})

const mapStateToProps = state => ({
    modalState: state.modalState,
})

export default connect(mapStateToProps, mapDispatchToProps)(StockSelector);
