import React, { Component } from 'react'
import CustomModal from '../CustomModal/CustomModal';
import { connect } from 'react-redux';
import { hideModal, addStock } from '../../actions/rootActions';

class ModalContainer extends Component {

    render() {
        return (
            this.props.modalState ?
                <CustomModal 
                addStock={this.props.addStock}
                hideModal={this.props.hideModal}
                modalDetails={this.props.modalDetails} /> : null
        );
    }
}

const mapDispatchToProps = dispatch => ({
    hideModal: (obj) => dispatch(hideModal(obj)),
    addStock: (obj) => dispatch(addStock(obj)),
})

const mapStateToProps = state => ({
    modalState: state.modalState,
    modalDetails: state.modalDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);