import {Card, Image} from "react-bootstrap";

import css from './Profile.module.scss';

const ProfileInfo = function () {

    return (
        <Card className="text-center">
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