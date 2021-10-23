import {Container, Row, Col, Card, CardGroup, Button} from 'react-bootstrap'

import css from './CardItem.module.scss';

const CardItem = () => {

    return (
        <Container>
            <Row className={css.cardList}>
                <Col sm>
                    <Card>
                        <Card.Img variant="top" src="https://www.freetogame.com/g/452/thumbnail.jpg"/>
                        <Card.Body>
                            <Card.Title>Call Of Duty: Warzone</Card.Title>
                            <Card.Text>23.10.2021</Card.Text>
                            <Card.Text>
                                A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern
                                Warfare.
                            </Card.Text>
                            <Button variant="primary">More information</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card>
                        <Card.Img variant="top" src="https://www.freetogame.com/g/452/thumbnail.jpg"/>
                        <Card.Body>
                            <Card.Title>Call Of Duty: Warzone</Card.Title>
                            <Card.Text>23.10.2021</Card.Text>
                            <Card.Text>
                                A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern
                                Warfare.
                            </Card.Text>
                            <Button variant="primary">More information</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card>
                        <Card.Img variant="top" src="https://www.freetogame.com/g/452/thumbnail.jpg"/>
                        <Card.Body>
                            <Card.Title>Call Of Duty: Warzone</Card.Title>
                            <Card.Text>23.10.2021</Card.Text>
                            <Card.Text>
                                A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern
                                Warfare.
                            </Card.Text>
                            <Button variant="primary">More information</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
        ;
}

export default CardItem;
