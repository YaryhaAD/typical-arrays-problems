
exports.min = function min(array) {

  if (typeof array === 'undefined' || array.length === 0){
    return 0;
  }else {
    return Math.min(...array);
    }
}

exports.max = function max(array) {
  if (typeof array === 'undefined' || array.length === 0){
    return 0;
  }else {
    return Math.max(...array);
    }
}

exports.avg = function avg(array) {
  var total = 0;
  var count = 0;

  if (typeof array === 'undefined' || array.length === 0){
    return 0;
  }else {
    array.forEach(function (item, i) {
      total += item;
      count++;
    });
  
    return total / count;
    }
}


