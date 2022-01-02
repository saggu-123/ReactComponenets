import React from 'react'

const Contact = ({contacts}) => {
    return (
        <>
        <ul className="Contact-list">
            {contacts.map((item) => (
                <li 
                key={item.id}>
                 NAME: <span> {item.fullname} </span>
                           PHONE: <span> {item.tel} </span>
                    
                </li>
            ))}
        </ul>
        </>
    )
}

export default Contact
