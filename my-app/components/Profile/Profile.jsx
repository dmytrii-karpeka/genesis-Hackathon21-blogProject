import {Card, Image} from "react-bootstrap";

import css from './Profile.module.scss';

const ProfileInfo = function () {

    return (
        <Card className="text-center">
            <Card.Body>
                <Image src="https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-Resize-B3J09qVGW8Pu6GO.jpg" roundedCircle/>
                <Card.Title>Agent Smith</Card.Title>
                <Card.Text>
                    Email: agent.smith@delta.com
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProfileInfo;