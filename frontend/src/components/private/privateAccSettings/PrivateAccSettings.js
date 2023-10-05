import { useState } from 'react';
import "./privateAccSettings.css"
import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function PrivateAccSettings() {
  return (
    <div className='wrapper-private-acc-settings'>
      <DropdownButton id="dropdown-basic-button" title="Nastavení účtu">
        <Dropdown.Item className='p-acc-settings-item' href="#/action-1">Změna hesla</Dropdown.Item>
        <Dropdown.Item className='p-acc-settings-item'><Link to="/mojeudaje"className='p-acc-settings-item'>Osobní údaje</Link></Dropdown.Item>
        <Dropdown.Item className='p-acc-settings-item'>Platby</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}


export default PrivateAccSettings