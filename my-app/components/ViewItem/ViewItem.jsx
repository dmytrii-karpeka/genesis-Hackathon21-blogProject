import ShowMoreText from 'react-show-more-text';
import {Button, Col, Container, FormControl, Image, InputGroup, Row} from "react-bootstrap";

import css from './ViewItem.module.scss';

const ViewItem = function ({ info }) {

    return(
        <Container className={css.container}>
            <Row>
                <Col sm={1}>

                </Col>
                <Col sm={4}>
                    <Image src={info.thumbnail} alt={"Something went wrong?"} rounded fluid />
                </Col>
                <Col sm={6}>
                    <Row>
                        <h1>{info.title}</h1>
                    </Row>
                    <Row>
                        <p>Release date: {info.release_date}</p>
                    </Row>
                    <Row>
                    <ShowMoreText
                        more={<span className={css.collapseLink}>Show more</span>}
                        less={<span className={css.collapseLink}>Show less</span>}
                        className={css.content}>
                        {info.description}
                    </ShowMoreText>
                    </Row>
                    <Row>
                        <Button size="lg" href={info.game_url} target="_blank">
                            Visit game
                        </Button>
                    </Row>
                    <br />
                    {/*//TODO: commentary component*/}
                    <InputGroup>
                        <FormControl as="textarea" />
                        <Button size="sm" variant="outline-primary" id="button-addon2">
                            Post
                            commentary
                        </Button>
                    </InputGroup>
                </Col>
                <Col sm={1}>

                </Col>
            </Row>
        </Container>
    )
}

export default ViewItem;