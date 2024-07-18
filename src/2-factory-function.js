const bankAccountFactory = (num = 0) => {
  let balance = num
  return {
    checkBalance() {
      return balance
    },
    add(num) {
      balance += num
      console.log(`$${num} added.`)
      return balance
    },
    subtract(num) {
      balance -= num
      console.log(`$${num} subtracted.`)
      return balance
    }
  }
};

module.exports = {
  bankAccountFactory,
};
