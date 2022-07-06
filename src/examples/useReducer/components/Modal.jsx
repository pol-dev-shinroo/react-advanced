import React, { useEffect, useState } from "react";

const Modal = ({ modalContent, closeModal }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal();
            console.log("close", new Date().getTime().toString());
        }, 3000);
    }, []);
    return (
        <div className="modal">
            <p>{modalContent}</p>
        </div>
    );
};

export default Modal;
