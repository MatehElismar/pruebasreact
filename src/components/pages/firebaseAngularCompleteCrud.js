import React from 'react';
import '../../App.css';
import CrudReact from '../firebaseAngularCompleteCrudPage';
import Footer2 from '../Footer2';

function firebaseAngularCompleteCrud() {
    return (
        <>
            <CrudReact />
            {/* <Cards />
      <Footer /> */}
            <Footer2 />
        </>
    );
}

export default firebaseAngularCompleteCrud;