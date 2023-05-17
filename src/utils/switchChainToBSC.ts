export async function switchChainToBSC() {
  try {
    await (window as any).ethereum.request({
      method: 'wallet_switchEthereumChain',
      //params: [{ chainId: '0x38' }],
      params: [{ chainId: '0x61' }],
    });
  } catch (e: any) {
    if (e.code === 4902) {
      try {
        await (window as any).ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              //chainId: '0x38',
              chainId: '0x61',
              chainName: 'BNB Testnet',
              nativeCurrency: {
                name: 'BINANCE COIN',
                symbol: 'BNB',
                decimals: 18,
              },
              rpcUrls: ['https://rpc.ankr.com/bsc_testnet_chapel/'],
              blockExplorerUrls: ['https://testnet.bscscan.com/'],
            },
          ],
        });
      } catch {}
    }
  }
}
