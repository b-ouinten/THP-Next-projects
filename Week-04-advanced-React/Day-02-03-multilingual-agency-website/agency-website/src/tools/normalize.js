const normalize = (json) => {
  const result = {};
  const reduceObj = (object, previousKey = null) => {
    Object.keys(object).forEach((key) => {
      const value = object[key];
      let newKey = key;
      if (previousKey) {
        newKey = `${previousKey}.${key}`;
      }
      if (typeof value === 'string') {
        result[newKey] = value;
      } else {
        reduceObj(value, newKey);
      }
    });
  };

  reduceObj(json);

  return result;
};

export default normalize;
