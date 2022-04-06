import React, { useState, useEffect } from "react";

import Modal from 'react-modal';
import styles from './dialog.module.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useDispatch, useSelector } from 'react-redux';
import { setDialogOpen } from '../redux/reducer/myselfSlice'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

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
            onRequestClose={closeDialog}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <span className={styles.btn_close}>
                <FontAwesomeIcon icon={faXmarkCircle} onClick={closeDialog}/>
            </span>
            <div className={styles.pdf_container}>
                <Document className={styles.pdf_document} file="./portfolio_kkh.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page className={styles.pdf_pages} key={`page_${index + 1}`} pageNumber={index + 1} width={1000}/>
                    ))}
                </Document>
            </div>
        </Modal>
    )
}

export default Dialog;