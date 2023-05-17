import 'chart.js/auto';
// services
import * as r from 'src/services/read';

// ----------------------------------------------------------------------

export function UserWelcome() {
  return (
    <div style={{ maxWidth: '800px', margin: '40px' }}>
      <h1 style={{ color: '#00ff00' }}>Bienvenido a tu primera dApp en BlockChain</h1>
    </div>
  );
}
