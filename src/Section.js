import React, { Fragment } from 'react';

const Section = ({ titre, children }) => {
    return (
        <Fragment>
            <h1>{titre}</h1>
            <h1>Bonjour le, {<children></children>}</h1>
            <h2>Vous nom comporte {`${children.name?.length} caractere ${children.name.length > 1 ? "s" : ""}`} </h2>
        </Fragment>
    );
};

export default Section;