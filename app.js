<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ncelbi2 Staking</title>
</head>
<body>
  <h1>🚀 Ncelbi2 Staking</h1>

  <button onclick="connectWallet()">Connect Wallet</button>
  <p id="wallet">Not connected</p>

  <h3>Stake Ncelbi2</h3>
  <input type="number" id="stakeAmount" placeholder="Amount to stake"/>
  <button onclick="stakeTokens()">Stake</button>

  <h3>Unstake Ncelbi2</h3>
  <input type="number" id="unstakeAmount" placeholder="Amount to unstake"/>
  <button onclick="unstakeTokens()">Unstake</button>

  <p id="status"></p>

  <script src="https://cdn.jsdelivr.net/npm/web3@1.8.2/dist/web3.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
