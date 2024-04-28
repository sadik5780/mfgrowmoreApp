// export const BASE_URL = "https://wifiattendanceapi.azurewebsites.net/";
// export const BASE_URL = "http://18.188.42.141:8080/";

export const DEVELOPEMENT_URL = "https://18.188.42.141/"
export const BASE_URL = "https://api.wifiattendance.com/";
export const BASE_URL_CHAT = "https://chat.wifiattendance.com:3015";
//export const BASE_URL_CHAT = "http://localhost:3015";
export const BASE_URL_CHAT_Image = "https://chat.wifiattendance.com";

const LOGIN_PATH = "api/authentication/";


const ApiConfig = {
  BASE_URL_FOR_IMAGES: "https://api.wifiattendance.com/assets/uploads/",
  BASE_URL: BASE_URL,
  //  ============= PROFIE API =============================
  GET_PROFILE: BASE_URL + PROFILE_PATH + "getprofile",
  EDIT_PERSONALDATA: BASE_URL + PROFILE_PATH + "editpersonaldtls",
  EDIT_EMPLOYEDATA: BASE_URL + PROFILE_PATH + "editemployeecontactdtl",
  //  ============= user API =============================
  CREATE_ACCOUNT: BASE_URL + USER_PATH + "createaccount",
  LOGIN: BASE_URL + LOGIN_PATH + "authenticate",
  // LOGIN: BASE_URL + LOGIN_PATH + "authenticate",
  FORGET_PASSWORD: BASE_URL + USER_PATH + "forgetpassword",
  CHANGE_PASSWORD: BASE_URL + USER_PATH + "changeuserpassword",
  //  ============= DASHBOARD API =============================

};

export default ApiConfig;
