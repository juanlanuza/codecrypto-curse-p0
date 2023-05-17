import { account, address, contract } from './config';
import toast from 'react-hot-toast';

// ----------------------------------------------------------------------
// Write Contract

async function sendTx(params: any[]) {
  await window.ethereum
    .request({ method: 'eth_sendTransaction', params })
    .catch((e: any) => toast.error(e.message));
}

// 1. decrement()
export async function decrement(): Promise<void> {
  sendTx([
    {
      from: account,
      to: address,
      data: contract.methods.decrement().encodeABI(),
    },
  ]);
}

// 2. increment()
export async function increment(): Promise<void> {
  sendTx([
    {
      from: account,
      to: address,
      data: contract.methods.increment().encodeABI(),
    },
  ]);
}
