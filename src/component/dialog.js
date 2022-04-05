import React, { useState, useEffect } from "react";

import Modal from 'react-modal';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogOpen } from '../redux/reducer/myselfSlice'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };
  

const Dialog = () => {
    const dispatch = useDispatch();
    const dialogOpen = useSelector(({myself}) => myself.dialogOpen);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    const closeDialog = () => {
        dispatch(setDialogOpen(false));
    }

    const prevPage = () => {
        setPageNumber(pageNumber === 1 ? 1 : pageNumber -1);
    }

    const nextPage = () => {
        setPageNumber(pageNumber === numPages ? pageNumber : pageNumber + 1);
    }

    useEffect(() => {
        dialogOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
    }, [dialogOpen])

    return (
        <Modal
            isOpen={dialogOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeDialog}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <div>
                <Document file="./portfolio_kkh.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} width={1200}/>
                </Document>
                <p>
                    <FontAwesomeIcon icon={faCircleChevronLeft} size='2x' onClick={prevPage} />
                    <FontAwesomeIcon icon={faCircleChevronRight} size='2x' onClick={nextPage} />
                </p>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
            <button onClick={closeDialog}>close</button>
        </Modal>
    )
}

export default Dialog;