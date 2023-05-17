import { memo, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container, AppBar, Button, Stack, CardMedia, Typography, Box } from '@mui/material';
// hooks
import { useMetaMask } from 'metamask-react';
// services
import { setAccount } from 'src/services/config';
import { switchChainToBSC } from 'src/utils/switchChainToBSC';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(2, 0),
  Button: {
    color: '#fff',
    borderColor: '#fff',
    ':hover': { borderColor: '#b7c7d7' },
    transition: 'border-color .2s ease-in-out',
  },
}));

// ----------------------------------------------------------------------

function Header() {
  const { status, chainId, connect, account } = useMetaMask();

  useEffect(() => {
    setAccount(account ?? '');
  }, [account]);

  useEffect(() => {}, [status]);

  return (
    <RootStyle>
      <Container maxWidth={'xl'}>
        <Stack direction='row' alignItems='center' justifyContent='space-between' maxHeight='100px'>
          <Box sx={{ maxWidth: '33%' }}>
            <CardMedia component='img' image='/images/logo.png' />
          </Box>

          <Stack direction='row' alignItems='center'>
            {status !== 'connected' && status !== 'unavailable' ? (
              <Button
                disabled={status === 'initializing' || status === 'connecting'}
                variant='outlined'
                onClick={connect}
              >
                {status === 'notConnected' ? 'Connect Metamask' : status + '...'}
              </Button>
            ) : (
              !!account &&
              (chainId === '0x61' ? (
                // BNB Mainnet(chainId === '0x38' ? (
                <Typography style={{ color: '#61DBFB' }}>
                  Cartera Conectada: {account.substring(0, 5)}...
                  {account.substring(account.length - 4)}
                </Typography>
              ) : (
                <>
                  <Typography style={{ color: '#61DBFB' }} mr={2}>
                    Por Favor, conecta a Smart Chain - Testnet
                  </Typography>
                  <Button variant='outlined' onClick={switchChainToBSC}>
                    Cambia la red
                  </Button>
                </>
              ))
            )}
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}

export default memo(Header);
