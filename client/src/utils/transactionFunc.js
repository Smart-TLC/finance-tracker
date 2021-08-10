// Date comparation
export const isSooner = (d1, d2) => {
  var arr1 = d1.split("-").map((item) => parseInt(item));
  var arr2 = d2.split("-").map((item) => parseInt(item));
  if (arr1[2] == arr2[2]) {
    if (arr1[1] == arr2[1]) {
      return arr2[0] - arr1[0];
    }
    return arr2[1] - arr1[1];
  }
  return arr2[2] - arr1[2];
};
