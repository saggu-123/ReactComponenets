import React, { useState } from 'react';
import Contacts from '../DATA/ContactList.js';
import Contact from '../Search/Contact'
import '../Sass/Search.scss';

const Search = () => {
    const [search , setSearch]= useState('')
    const idk = (e)=>{
    setSearch(e.target.value)
    }

const filteredContacts = search.length === 0 ? Contacts: Contacts.filter(item=>                         
  item.fullname.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
        <div className="Search-bar">
          <h4>Contact list</h4>  
          <input 
          type="text"
          placeholder="Search Name"
          value={search}
          onChange={idk}
          />
          <Contact contacts={filteredContacts}></Contact>
          </div>
        </>
    )
}

export default Search
