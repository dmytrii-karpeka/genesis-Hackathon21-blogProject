import {Dropdown} from 'react-bootstrap';
import css from './Droplist.module.scss';

const platformOptions = [
    {
        label: "PC (Windows)",
        value: "pc"
    },
    {
        label: "Web Browser",
        value: "browser"
    },
    {
        label: "All platforms",
        value: "all"
    }
]

const categoryOptions = [
    {
        label: "MMORPG",
        value: "mmorpg"
    },
    {
        label: "Shooter",
        value: "shooter"
    },
    {
        label: "PvP",
        value: "pvp"
    },
    {
        label: "MMOFPS",
        value: "mmofps"
    },
    {
        label: "Anime",
        value: "anime"
    }
]

const sortOptions = [
    {
        label: "Alphabet",
        value: "alphabetical"
    },
    {
        label: "Release date",
        value: "release-date"
    },
    {
        label: "Popularity",
        value: "popularity"
    },
    {
        label: "Relevance",
        value: "relevance"
    }
]

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
