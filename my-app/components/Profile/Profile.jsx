import {Card, Accordion, Image} from "react-bootstrap";

import css from './Profile.module.scss';

const ProfileInfo = function () {

    return (
        <Card className="text-center">
            <Card.Header>Profile Information</Card.Header>
            <Card.Body>
                <Image src="https://via.placeholder.com/150" roundedCircle/>
                <Card.Title>Username</Card.Title>
                <Card.Text>
                    Email:
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProfileInfo;