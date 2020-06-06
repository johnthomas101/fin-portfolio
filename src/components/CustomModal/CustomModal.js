import React, { Component } from 'react';
import './CustomModal.css';
import axios from 'axios';

class CustomModal extends Component {
    state = {
        currPrice: null,
        price: null,
        count: null
    }
    hideModalHandler = () => {
        this.props.hideModal()
    }

    saveHandler = () => {
        let url = "https://finportfolio-5dbdc.firebaseio.com/mystocks.json"
        let obj = {
            symbol:this.props.modalDetails.symbol,
            name: this.props.modalDetails.name,
            count: this.state.count,
            price: this.state.price
        }
        axios.post(url, obj).then((response)=>{
            console.log(response);
        });
        this.props.addStock({
            stock: obj
        })
        this.props.hideModal();
    }

    componentDidMount() {
        let url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=0HR4LZI9XRQFSOMS&symbol=" + this.props.modalDetails.symbol;
        axios.get(url).then((response) => {
            console.log(response);
            if (response.data && response.data["Time Series (Daily)"]) {
                let value = response.data["Time Series (Daily)"][response.data["Meta Data"]["3. Last Refreshed"]]["4. close"]
                this.setState({
                    currPrice: value
                })
            }

        })
    }

    render() {
        return (
            <div className="customModal">
                <div className="contentDiv">
                    <div className="modalContainer">
                        <table>
                            <tr>
                                <td>Company Name:</td>
                                <td>{this.props.modalDetails.name}</td>
                            </tr>
                            <tr>
                                <td>Current Price:</td>
                                <td>{this.state.currPrice}</td>
                            </tr>
                            <tr>
                                <td>No of shares </td>
                                <td>
                                    <input onChange={(ev)=>this.setState({count: ev.target.value})} type='number' />
                                </td>
                            </tr>
                            <tr>
                                <td>Buy Price</td>
                                <td>
                                    <input onChange={(ev)=>this.setState({price: ev.target.value})} type='number' />
                                </td>
                            </tr>
                            <tr>
                                <td>Buy Date</td>
                                <td>
                                    <input type='date' />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="buttonDiv">
                        <div 
                        onClick={() => this.saveHandler()}
                        className="buttonStyle">
                            Save
                    </div>
                        <div
                            onClick={() => this.hideModalHandler()}
                            className="buttonStyle">
                            Cancel
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomModal;