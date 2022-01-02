import React , {useState} from 'react'
import Drop from '../DATA/Dropdowndata';
import '../Sass/Drop.scss';
import {Link} from 'react-router-dom';



const Dropdown = () => {
    const [dropdown , setdropdown] = useState(true);
    const showDrop =()=>{
        setdropdown(!dropdown);

    }
    const closeDrop =()=>{
        setdropdown(dropdown)
    }
    return (
        <>
        <ul className={ dropdown ? 'drop-down-clicked': 'drop-down'}
        onClick={showDrop}>
            {Drop.map((item)=> {
                return (
                    <li key={item.id}
                    className="list-item">
                        <Link to={item.path}
                        onClick={closeDrop}>
                            {item.title}</Link>
                    </li>
                )
            })}
        </ul>
            
        </>
    )
}

export default Dropdown;
