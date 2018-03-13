export default key => store => next => action => {
  let result =next(action);

  try {
    let json = JSON.stringify(key ? store.getState()[key] : store.getState());
    localStorage.setItem(key || 'state', json);
  } catch(error) {
    console.error(error);
  }

  return result;
};