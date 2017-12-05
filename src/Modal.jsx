import React, { Component } from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div>
                <div className={this.props.isVisible ? 'modal show' : 'modal'} >{this.props.children}</div>
                <div className={this.props.isVisible ? 'backdrop show' : 'backdrop'} onClick={e => this.close(e)} />
            </div>
        );
    }

    close(e) {
        e.preventDefault()

        if (this.props.onClose) {
            this.props.onClose()
        }
    }
}

export default Modal;