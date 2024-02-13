import './certificates.styles.scss'
import '../navigationBar/navigation.component.jsx'
import prblmSolvngBasic from '../../assets/problem_solving_basic certificate.pdf'
//import prblmSolvngInter from 'problem_solving_intermediate certificate.pdf'
import Navigation from '../navigationBar/navigation.component.jsx'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

const Certificates=() => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }){
    setNumPages(numPages);
  }

  return (
    <div>
      Under Construction !!!
    </div>
  );
}

export default Certificates