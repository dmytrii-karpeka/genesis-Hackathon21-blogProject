import {Dropdown} from 'react-bootstrap';

import css from './Dropdown.module.scss';

const categoryOptions = [
    {
        value: 'browser',
        label: 'Web Browser'
    },
    {
        value: 'browser',
        label: 'Web Browser'
    }
];

const Droplist = ({ onChange }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {categoryOptions.map(option => <Dropdown.Item onClick={onChange} href="#/action-1">{option.label}</Dropdown.Item>)}
                {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Droplist;
