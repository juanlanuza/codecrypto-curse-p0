import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
// mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import { Backdrop, CircularProgress } from '@mui/material';
// hooks
import { useMetaMask } from 'metamask-react';
// components

import { RequestConnect } from 'src/components/RequestConnect';
import { RequestMetamask } from 'src/components/RequestMetamask';
import { UserWelcome } from 'src/components/UserWelcome';
import { UserTable } from 'src/components/UserTable';
// services
import { Toaster } from 'react-hot-toast';

// ----------------------------------------------------------------------

const RootStyle = styled(Container)(({}) => ({
  paddingTop: '6rem',
  paddingBottom: '2rem',
  minHeight: 'calc(100vh - 56px)',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  maxWidth: 'xl',
}));

// ----------------------------------------------------------------------

const Home: NextPage = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    status === 'initializing' || status === 'connecting' ? setIsLoading(true) : setIsLoading(false);
  }, [status]);

  return (
    <RootStyle>
      {status === 'connected' && (
        <>
          {
            <>
              <UserWelcome />
              <UserTable />
            </>
          }
        </>
      )}
      {status === 'notConnected' && <RequestConnect />}
      {status === 'unavailable' && <RequestMetamask />}

      <Toaster />

      <Backdrop open={isLoading}>
        <CircularProgress />
      </Backdrop>
    </RootStyle>
  );
};

export default Home;
