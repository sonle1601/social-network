import React from 'react';
import './RightBar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

function RightBar() {
  return (
    <div class='rightBar'>
      <div className='rightBar__header'>
        <button className='header__notification'>
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            color='secondary'
            badgeContent={99}
          >
            <NotificationsNoneIcon />
          </Badge>
        </button>

        <div className='account__text'>
          <h4>Hello,</h4>
          <h3 className='account__name'>Tempoyo</h3>
        </div>
        <Avatar
          variant='rounded'
          src='https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg'
        ></Avatar>
      </div>
    </div>
  );
}

export default RightBar;
