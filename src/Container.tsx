import React from 'react';
import { Container } from 'react-bootstrap';


const MyContainer = (props: any) => {
    return (
        <Container
            style={{ height: '80vh', width: '80%', border: '2px solid grey', margin: '50px', alignItems: 'center' }}
            className="d-flex align-items-center justify-content-center"
        >
            {props.children}
        </Container>
    );
};

export default MyContainer;