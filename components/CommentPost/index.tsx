import React from 'react';
import { IconButton, Menu, MenuItem, Paper, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import styles from './CommentPost.module.scss';

interface CommentPostProps {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const CommentPost: React.FC<CommentPostProps> = ({ user, post, text }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h6" className={styles.title}>
        <a href="#">{post.title}</a>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Typography>
      <Typography className="mt-10 mb-15">{text}</Typography>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        elevation={3}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </Paper>
  );
};
