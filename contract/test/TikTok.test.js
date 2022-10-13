const { ether, balance, send } = require("@openzeppelin/test-helpers");
const { expect } = require('chai');
const { accounts, contract } = require("@openzeppelin/test-environment");
const Tiktok = contract.fromArtifact("TikTok");
// Start test block
describe('TikTok', function () {
  const [ deployer, provider1,  provider2] = accounts;
  const INIT_CONTRACT_BALANCE = ether('50');
  const CHECK_TOTAL_BALANCE = ether('100');
  before(async function(){
    this.tiktok = await Tiktok.new({ from: deployer});
    await this.tiktok.deposite({ from: provider1, value: INIT_CONTRACT_BALANCE });
    await this.tiktok.deposite({ from: provider2, value: INIT_CONTRACT_BALANCE });
  })

  it('init contract check balance of contract', async function(){
    expect(await balance.current(this.tiktok.address)).to.be.bignumber.eq(
      CHECK_TOTAL_BALANCE
    );
  })

  it('get balance refer to msg.sender', async function(){
    expect(await this.tiktok.getBalance(provider1)).to.be.bignumber.eq(
      INIT_CONTRACT_BALANCE
    );
  })
});
