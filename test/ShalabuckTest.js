const Shalabuck = artifacts.require('./Shalabuck.sol');
const _ = '        ';


contract('Shalabuck', async function (accounts) {
  let token;

  before(done => {
    (async () => {
      try {
        // TODO: All setup steps belong here, including contract deployment.
        token = await Shalabuck.new();
        var tx = await web3.eth.getTransactionReceipt(token.transactionHash);
        totalGas = totalGas.plus(tx.gasUsed);
        console.log(_ + tx.gasUsed + ' - Deploy Shalabuck');
        token = await Shalabuck.deployed();

        // Output how much gas was spent
        console.log(_ + '-----------------------');
        console.log(_ + totalGas.toFormat(0) + ' - Total Gas');
        done();
      }
      catch (error) {
        console.error(error);
        done(false);
      }
    })();
  });

  describe('Shalabuck.sol', function () {
    // 1 - It should pass a canary test
    it('Should always pass this canary test', async () => {
      assert(true === true, 'this is true');
    });

    it("Should call another function on your deployed contract", async () => {
      let instance = await Shalabuck.deployed();
      // TODO: Write the code here to call a contract function
    });

    it("Should allow a token to be minted by the contract owner", async () => {

    })

    it("Should see minted tokens be associated with contract owner", async () => {

    })

    it("Should allow the contract owner to send a token to a user", async () => {

    })

    it("Should allow a user to send a token to another user", async () => {

    })



 });
});
