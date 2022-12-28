// 객체 깊은 복사 방법 1 완전 복사
let copyObjectDeep = function (target) {
  let result = {};
  if (typeof target === "object" && target !== null) {
    for (let prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

// 객체 깊은 복사 방법2 데이터는 완전 복사하지만 getter,setter등 설정 정보는 X
let copyObjectViaJSON = function (target) {
  return JSON.parse(JSON.stringify(target));
};
