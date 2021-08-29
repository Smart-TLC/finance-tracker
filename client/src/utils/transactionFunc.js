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
  if (s !== "") {
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

export const costsSum = (cateAllTransactions) => {
  let sum = 0;
  for (let i = 0; i < cateAllTransactions.length; i++) {
    sum += cateAllTransactions[i].value;
  }

  return sum;
}

export const calculatePercentage = (cateAllTransactions, sumOfCosts) => {
  for (let i = 0; i < cateAllTransactions.length; i++) {
    cateAllTransactions[i].percentage = parseFloat((cateAllTransactions[i].value / sumOfCosts));
  }
}

export const removeZeroValueTransactions = (transactions) => {
  const newTransactions = transactions.filter((transaction) => transaction.value !== 0);
  return newTransactions
}

export const cateTransactions = (transactions, categories, colors) => {
  let cateAllTransactions = [];
  for (const key in categories) {
    let CateData = transactions.filter((transaction) => transaction.category === categories[key]);
    let sum = 0;
    for (let i = 0; i < CateData.length; i++) {
      sum += CateData[i].amount
    }
    let cateObject = {
      title: capitalizeString(categories[key]),
      value: sum,
      color: colors[key]
    }
    cateAllTransactions.push(cateObject);
  }
  return cateAllTransactions
}

// Sort transactions value from large to small 
export const sortTransactions = (transactions) => {
  let newTransactions = [];
  newTransactions = transactions.sort((a , b) => b.amount - a.amount);
  return newTransactions
}

// Filter transactions by month from format MMM/YYYY e.g Aug 2021
export const filterMonthTransaction = (transactions, date) => {
  var mon = `${date.format("MM")}-${date.format("YYYY")}`;

  // Filter transactions based on each month
  return transactions.filter(
    (transaction) => transaction.spentAt.slice(3, 10) === mon
  );
}

