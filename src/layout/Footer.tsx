import { memo } from 'react';
// @mui
import { styled, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const FooterStyled = styled('div')(({ theme }) => ({
  backgroundColor: '#000',
  color: '#fff',
  padding: theme.spacing(2),
  textAlign: 'center',
  width: '100%',
}));

// ----------------------------------------------------------------------

function Footer() {
  return (
    <footer>
      <FooterStyled>
        <Typography style={{ color: '#00ff00' }}>
          © 2022 CODECRYPTO TODOS LOS DERECHOS RESERVADOS
        </Typography>
      </FooterStyled>
    </footer>
  );
}

export default memo(Footer);
