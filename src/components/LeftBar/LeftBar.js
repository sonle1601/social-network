import './LeftBar.css';
import React from 'react';
import LeftBarBtn from '../LeftBarBtn/LeftBarBtn';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

function LeftBar() {
  return (
    <div class='leftBar'>
      <a class='leftBar__logo'>Tempo</a>
      <LeftBarBtn Icon={HomeIcon} Text={'hello'} />
      <LeftBarBtn Icon={SettingsIcon} Text={'setting'} />
    </div>
  );
}

export default LeftBar;
