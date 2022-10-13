const { ether, balance, send } = require("@openzeppelin/test-helpers");
const { expect } = require('chai');
const { accounts, contract } = require("@openzeppelin/test-environment");
const Tiktok = contract.fromArtifact("TikTok");
// Start test block
describe('TikTok', function () {
  const [ deployer, provider ] = accounts;
  const INIT_CONTRACT_BALANCE = ether('50');
  before(async function(){
    this.tiktok = await Tiktok.new({ from: deployer});
    await this.tiktok.deposite({ from: provider, value: INIT_CONTRACT_BALANCE });
  })

  it('test before', async function(){
    expect(await balance.current(this.tiktok.address)).to.be.bignumber.eq(
      INIT_CONTRACT_BALANCE
    );
  })

  // it('test part', async function () {
    
  //   expect(await balance.current(this.tiktok.address)).to.be.bignumber.eq(
  //     INIT_CONTRACT_BALANCE
  //   );
  // });


  // it('deposite', async function () {
    
  //   expect(await this.box.retrieve()).to.be.bignumber.equal(value);
  // });
});
