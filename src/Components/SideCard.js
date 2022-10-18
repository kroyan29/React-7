import React, { Fragment } from 'react';
import baner from '../Assets/MK.jpg'

import {
    Card, CardImg, CardBody, CardText, CardTitle, Button, UncontrolledAlert, CardSubTitle
}
    from 'react-bootstrap';

const Banner = baner;
const SideCard = () => {

    <Fragment>

        <UncontrolledAlert color="danger" className='d-none d-1g-block'>
            <strong>Учетная запись не активирована</strong>

        </UncontrolledAlert>

        <Card>
            <CardImg top width="100%" src={Banner} />
            
            <CardBody>
                <CardTitle>
                    Мария Бутова                 </CardTitle>
                <CardSubTitle>
                    Web-Developer, Lagos
                </CardSubTitle>
                <CardText>lorem impose....
                </CardText>
                <Button>Посмотреть профиль</Button>
            </CardBody>
        </Card>
    </Fragment>
    
}
export default SideCard;