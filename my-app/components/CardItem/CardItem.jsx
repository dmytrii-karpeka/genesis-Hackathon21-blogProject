import {Card, Button} from 'react-bootstrap'

import css from './CardItem.module.scss';

const CardItem = ({ item }) => {
    return (
        <Card>
            <Card.Img variant="top" src={item.thumbnail}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{new Date(item.release_date).toLocaleDateString('en')}</Card.Text> {/* // format date according to locale */}
                <Card.Text className={css.description}>{item.short_description}</Card.Text>
                <Button variant="primary">More information</Button>
            </Card.Body>
        </Card>
    );
}

export default CardItem;
