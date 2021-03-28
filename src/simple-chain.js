const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.chainArr.length || !Number.isInteger(position)) {
      this.chainArr = [];
      throw new Error();
    }
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainArr.join('~~');
    this.chainArr = [];
    return result;
  }
};

module.exports = chainMaker;