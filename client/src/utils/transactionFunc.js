// Date comparation
export const isSooner = (d1, d2) => {
  var arr1 = d1.split("-").map((item) => parseInt(item));
  var arr2 = d2.split("-").map((item) => parseInt(item));
  if (arr1[2] === arr2[2]) {
    if (arr1[1] === arr2[1]) {
      return arr2[0] - arr1[0];
    }
    return arr2[1] - arr1[1];
  }
  return arr2[2] - arr1[2];
};

// Capitalize string (used for categories)
export const capitalizeString = (s) => {
  if (s.length) {
    return s[0].toUpperCase() + s.slice(1);
  }
  return "";
};

// calculate balance
export const calculateBalance = (transactionData) => {
  const budgetData = transactionData.filter(
    (item) => item.type === "budget"
  );
  const expenseData = transactionData.filter(
    (item) => item.type === "expense"
  );
  var budgetMoney = 0;
  if (budgetData) {
    for (var i = 0; i < budgetData.length; i++) {
      budgetMoney += budgetData[i].amount;
    }
  }
  var expenseMoney = 0;
  if (expenseData) {
    for (var j = 0; j < expenseData.length; j++) {
      expenseMoney += expenseData[j].amount;
    }
  }
  return [budgetMoney, expenseMoney]
};
