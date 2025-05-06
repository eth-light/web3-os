import React from 'react';

const WalletApp: React.FC = () => {
  return (
    <div id="wallet" className="window hidden">
      <div className="window-header">
        Wallet
        <span className="close-btn" onClick={() => document.getElementById('wallet')?.classList.add('hidden')}>X</span>
      </div>
      <div className="window-content">
        <p><strong>Wallet Address:</strong> 0x0000...dead</p>
        <p><strong>Balance:</strong> $0.00 (0 ETH)</p>
        <p><strong>Tokens:</strong></p>
        <ul>
          <li>0 USDC</li>
          <li>0 DAI</li>
          <li>0 TACHY</li>
        </ul>
      </div>
    </div>
  );
};

export default WalletApp;
