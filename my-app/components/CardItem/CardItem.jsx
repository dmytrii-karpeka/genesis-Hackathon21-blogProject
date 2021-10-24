import React, { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap'
import Link from 'next/link';

import css from './CardItem.module.scss';

const CardItem = ({ item }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        if (navigator.language) {
            setLanguage(navigator.language)
        }
    }, []);

    return (
        <Card>
            <Card.Img variant="top" src={item.thumbnail}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{new Date(item.release_date).toLocaleDateString(language, { day: '2-digit', month: 'short', year: 'numeric' })}</Card.Text>
                <Card.Text className={css.description}>{item.short_description}</Card.Text>
                <Link href={`/game/${item.id}`}><Button variant="primary">More information</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default CardItem;
