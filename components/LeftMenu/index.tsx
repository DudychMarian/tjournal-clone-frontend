import React from 'react';
import { Button } from '@material-ui/core';
import {
  WhatshotOutlined as FireIcon,
  SmsOutlined as MessageIcon,
  TrendingUpOutlined as TrendingIcon,
  FormatListBulletedOutlined as ListIcon,
} from '@material-ui/icons';

import styles from './LeftMenu.module.scss';

const menu = [
  { text: 'Лента', icon: <FireIcon />, path: '/' },
  { text: 'Сообщения', icon: <MessageIcon />, path: '/' },
  { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/' },
  { text: 'Подписки', icon: <ListIcon />, path: '/' },
];

export const LeftMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Button>
              {obj.icon}
              {obj.text}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
