import React from 'react';
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <svg className={styles.logo} viewBox="0 0 24 25">
          <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
          <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
          <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
        </svg>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>

        <Button variant="contained" className={styles.penButton}>
          Новая запись
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
        />
        <ArrowBottom />
      </div>
    </Paper>
  );
};
