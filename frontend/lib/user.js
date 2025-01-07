import { save as storageSave, remove as storageRemove } from './storage.js';
import backend from './backend.js';

let misc = {};

export async function doLogin(email, password) {
  let user = backend.getUserByEmail(email);
  if (user === null) {
    return false;
  }

  if (user.password !== password) {
    return false;
  }

  userToken = '123456789';

  await storageSave('userToken', userToken);
  misc.setLoggedIn(true);
  // dispatch({ type: 'SIGN_IN', token: userToken });

  return true;
}

export async function doLogout() {
  console.log('[DEBUG] Logging out');

  // dispatch({ type: 'SIGN_OUT' });
  await storageRemove('userToken');
  misc.setLoggedIn(false);
}

export default misc;
