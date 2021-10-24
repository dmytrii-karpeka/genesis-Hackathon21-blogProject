import {Dropdown} from 'react-bootstrap';
import css from './Droplist.module.scss';

const Droplist = (props) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {props.category}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {props.options && props.options.map((option) => {
                    return(
                        <Dropdown.Item onClick={() => props.onChange(option)}>{option.label}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Droplist;
