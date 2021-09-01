import React from 'react';
import { Button, Dialog, DialogContent, DialogContentText, Divider, TextField, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import styles from './AuthDialog.module.scss';

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<'main' | 'email'>('main');

  return (
    <Dialog open={visible} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                'Вход в TJ'
              ) : (
                <p onClick={() => setFormType('main')} className={styles.backTitle}>
                  <ArrowBackIcon /> Войти через почту
                </p>
              )}
            </Typography>
            {formType === 'main' && (
              <>
                <div>
                  <Button className="mb-15" variant="contained" fullWidth>
                    <svg fill="none" viewBox="0 0 24 24" id="v_vkontakte">
                      <path
                        d="M2 11.583c0-4.517 0-6.776 1.403-8.18C4.807 2 7.066 2 11.583 2h.834c4.517 0 6.776 0 8.18 1.403C22 4.807 22 7.066 22 11.583v.834c0 4.517 0 6.776-1.404 8.18C19.194 22 16.934 22 12.416 22h-.833c-4.517 0-6.776 0-8.18-1.404C2 19.194 2 16.934 2 12.416v-.833z"
                        fill="#2787F5"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.417 8.25H5.958c-.417 0-.5.196-.5.412 0 .387.495 2.302 2.303 4.836 1.205 1.73 2.903 2.669 4.449 2.669.927 0 1.042-.209 1.042-.568v-1.307c0-.417.087-.5.381-.5.216 0 .587.108 1.453.942.989.99 1.152 1.433 1.708 1.433h1.459c.416 0 .625-.209.505-.62-.132-.41-.604-1.004-1.23-1.709-.34-.401-.85-.834-1.005-1.05-.216-.279-.155-.402 0-.65 0 0 1.777-2.502 1.962-3.352.093-.309 0-.536-.44-.536h-1.46c-.37 0-.541.196-.634.412 0 0-.742 1.808-1.793 2.982-.34.34-.494.448-.68.448-.092 0-.226-.108-.226-.417V8.786c0-.37-.108-.536-.417-.536h-2.292c-.232 0-.372.172-.372.335 0 .352.526.433.58 1.422v2.147c0 .471-.085.556-.27.556-.495 0-1.698-1.815-2.411-3.893-.14-.404-.28-.567-.653-.567z"
                        fill="#fff"
                      />
                    </svg>
                    ВКонтакте
                  </Button>
                  <Button className="mb-15" variant="contained" fullWidth>
                    <svg fill="none" viewBox="0 0 24 24" id="v_google">
                      <path
                        d="M6.433 14.086l-.696 2.599-2.545.054a9.955 9.955 0 01-1.191-4.74 9.95 9.95 0 011.118-4.598l2.266.415.992 2.252A5.944 5.944 0 006.056 12c0 .734.133 1.437.377 2.086z"
                        fill="#FBBB00"
                      />
                      <path
                        d="M21.825 10.132a10.02 10.02 0 01-.044 3.956 9.997 9.997 0 01-3.52 5.71l-2.854-.146-.404-2.521a5.96 5.96 0 002.564-3.043H12.22v-3.956h9.605z"
                        fill="#518EF8"
                      />
                      <path
                        d="M18.26 19.798A9.957 9.957 0 0112 22a9.998 9.998 0 01-8.808-5.26l3.24-2.654a5.946 5.946 0 008.57 3.045l3.258 2.667z"
                        fill="#28B446"
                      />
                      <path
                        d="M18.384 4.302l-3.24 2.652a5.948 5.948 0 00-8.767 3.114L3.12 7.401a9.998 9.998 0 018.88-5.4c2.427 0 4.652.863 6.384 2.301z"
                        fill="#F14336"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button onClick={() => setFormType('email')} className="mb-15" variant="contained" fullWidth>
                    <svg viewBox="0 0 24 24" id="v_email">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 8a4 4 0 014-4h12a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V8zm2.026-.32l6.947 4.156a2 2 0 002.054 0l6.947-4.157A2 2 0 0018 6H6a2 2 0 00-1.974 1.68zM20 9.993l-5.946 3.558a4 4 0 01-4.108 0L4 9.994V16a2 2 0 002 2h12a2 2 0 002-2V9.994z"
                      />
                    </svg>
                    Через почту
                  </Button>
                </div>
                <div className={styles.miniButtons}>
                  <Button className="mb-15" variant="contained" fullWidth>
                    <svg fill="none" viewBox="0 0 24 24" id="v_facebook">
                      <path
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.992 3.656 9.129 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.262c-1.242 0-1.629.772-1.629 1.563V12h2.774l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.992 22 12z"
                        fill="#1877F2"
                      />
                      <path
                        d="M15.893 14.89l.443-2.89h-2.773v-1.875c0-.791.386-1.563 1.628-1.563h1.262v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.777 1.385-3.777 3.89V12h-2.54v2.89h2.54v6.989a10.058 10.058 0 003.124 0V14.89h2.33z"
                        fill="#fff"
                      />
                    </svg>
                  </Button>
                  <Button className="mb-15" variant="contained" fullWidth>
                    <svg fill="none" viewBox="0 0 24 24" id="v_twitter">
                      <path
                        d="M19.953 7.983c.012.174.012.347.012.523C19.965 13.844 15.837 20 8.29 20v-.003A11.75 11.75 0 012 18.186a8.322 8.322 0 006.073-1.674c-1.756-.033-3.296-1.16-3.834-2.806a4.152 4.152 0 001.853-.07C4.178 13.256 2.8 11.6 2.8 9.676v-.05c.57.312 1.21.486 1.863.505a4.007 4.007 0 01-1.27-5.394 11.708 11.708 0 008.456 4.22 4.002 4.002 0 011.187-3.86 4.153 4.153 0 015.806.176c.919-.178 1.8-.51 2.606-.98a4.067 4.067 0 01-1.804 2.233A8.26 8.26 0 0022 5.89a8.267 8.267 0 01-2.047 2.093z"
                        fill="#1D9BF0"
                      />
                    </svg>
                  </Button>
                  <Button className="mb-15" variant="contained" fullWidth>
                    <svg viewBox="0 0 24 24" id="v_apple">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.874 2.547c.726-.869 1.94-1.505 2.952-1.547a.163.163 0 01.166.146c.117 1.093-.27 2.313-1.038 3.264-.729.9-1.796 1.46-2.786 1.46a2.84 2.84 0 01-.207-.01.162.162 0 01-.147-.141c-.158-1.226.444-2.443 1.06-3.172zm-6.82 15.892c-1.831-2.7-2.884-7.153-1.228-10.087.87-1.547 2.449-2.523 4.12-2.548h.05c.72 0 1.398.274 1.997.517.448.182.835.339 1.133.339.265 0 .65-.155 1.095-.335.645-.26 1.448-.583 2.286-.583.107 0 .214.005.317.016.714.031 2.486.292 3.643 2.02a.167.167 0 01-.046.23l-.015.01c-.336.213-2.012 1.385-1.99 3.597.023 2.723 2.227 3.722 2.479 3.827l.011.005a.165.165 0 01.086.2l-.006.019a11.134 11.134 0 01-1.348 2.82c-.773 1.154-1.65 2.46-3.076 2.488-.665.013-1.116-.187-1.553-.38l-.004-.001c-.445-.197-.905-.4-1.625-.4-.758 0-1.24.21-1.708.413-.416.181-.846.368-1.44.392L9.158 21c-1.267 0-2.192-1.212-3.106-2.561z"
                      />
                    </svg>
                  </Button>
                </div>
              </>
            )}
            {formType === 'email' && (
              <div>
                <form>
                  <TextField className="mb-20" size="small" label="Почта" variant="outlined" fullWidth required />
                  <TextField
                    className="mb-20"
                    size="small"
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                  />
                  <Button color="primary" variant="contained">
                    Войти
                  </Button>
                </form>
              </div>
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
