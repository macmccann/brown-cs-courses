import React, { Component } from 'react';

class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false)
            return null;

        let modalStyle = {
            position: 'absolute',
            width: '80%',
            height: '80%',
            top: '50%',
            left: '50%',
            borderRadius: '10px',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            background: '#444'
        };

        let backdropStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndex: '9998',
            background: 'rgba(0, 0, 0, 0.3)'
        };

        return (
            <div>
                <div style={modalStyle}>{this.props.children}</div>
                <div style={backdropStyle} onClick={e => this.close(e)} />
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