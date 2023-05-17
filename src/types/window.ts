export {};

declare global {
  interface Window {
    ethereum: eth; 
  }
}

interface eth {
  chainId: string;
  isMetaMask: boolean;
  networkVersion: string;
  selectedAddress: string;
  sendAsync: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
  send: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
  request: (request: { method: string, params?: Array<any> }) => Promise<any>
}