/* eslint-env mocha, chai */
/* global maxPrimeSum chai */
describe('Test for Performance', function () {
  describe('maxPrimeSum', function () {
    it('maxPrimeSum(10000) should take less than 20ms', function () {
      this.slow(0);
      this.timeout(20);
      chai.expect(maxPrimeSum(10000)).to.eql([9521, 65]);
    });
    it('maxPrimeSum(100000) should take less than 200ms', function () {
      this.slow(0);
      this.timeout(2000);
      chai.expect(maxPrimeSum(100000)).to.eql([92951, 183]);
    });
  });
});
