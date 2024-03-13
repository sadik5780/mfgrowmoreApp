// export const BASE_URL = "https://wifiattendanceapi.azurewebsites.net/";
// export const BASE_URL = "http://18.188.42.141:8080/";
// export const BASE_URL = "http://18.188.42.141:8083/";
// http://18.188.42.141:8080/api/authentication/authenticate
// http://api.web.wifiattendance.com/
// export const BASE_URL = "https://18.188.42.141";

export const DEVELOPEMENT_URL = "https://18.188.42.141/"
export const BASE_URL = "https://api.wifiattendance.com/";
export const BASE_URL_CHAT = "https://chat.wifiattendance.com:3015";
//export const BASE_URL_CHAT = "http://localhost:3015";
export const BASE_URL_CHAT_Image = "https://chat.wifiattendance.com";

const LOGIN_PATH = "api/authentication/";
const USER_PATH = "api/users/";
const ATTENDANCE_PATH = "api/attendance/";
const TASK_PATH = "api/taskmanagement/";
const TIME_SHEET = "api/timesheet/";
const PRJECT_PATH = "api/Project/";
const DASHBOARD_PATH = "api/dashboard/";
const ORGANIZATION_PATH = "api/organization/";
const PROFILE_PATH = "api/myprofile/";
const PROJECT_PATH = "api/project/"
const ROLE_PATH = "api/roles/";


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
  GET_CHECKIN_CHECKOUT_DATA: BASE_URL + DASHBOARD_PATH + "getcheckincheckout",
  DASHBOARD_ALERT_NOTIFICATIONS: BASE_URL + DASHBOARD_PATH + "alertnotifications",
  TIMESHEETCOUNTS: BASE_URL + DASHBOARD_PATH + "timesheetcount",

  // http://localhost:44339/api/dashboard/timesheetcount

  //  ============= Attendance API =============================
  ATTENDANCE_LIST: BASE_URL + ATTENDANCE_PATH + "getmyattendance",
  EMPLOEE_NAME_LIST: BASE_URL + ATTENDANCE_PATH + "getemployeesnames",
  EMPLOYEE_LIST: BASE_URL + ATTENDANCE_PATH + "employeeattlist",
  UPDATE_TIME: BASE_URL + ATTENDANCE_PATH + "updateintimeouttime",
  GETINOUT_TIME: BASE_URL + ATTENDANCE_PATH + "getintimeouttime",
  ATTENDANCE_REPORT: BASE_URL + ATTENDANCE_PATH + "attendancereport",
  PUNCH_HISTORY: BASE_URL + ATTENDANCE_PATH + "getpuchhistory",
  LEAVEAPROVE_LIST: BASE_URL + ATTENDANCE_PATH + "getemployeeapprovelist",
  GET_APPROVE_SUBlIST: BASE_URL + ATTENDANCE_PATH + "getapprovesublist",
  UPDATE_APPRPVELEAVE_LIST: BASE_URL + ATTENDANCE_PATH + "updateapprovelist",
  GET_LEAVE_LIST: BASE_URL + ATTENDANCE_PATH + "getemployeeleaveapplications",
  GET_LEAVE_TYPE: BASE_URL + ATTENDANCE_PATH + "getleavetype",
  GET_LEAVE_STRUCTURE: BASE_URL + ATTENDANCE_PATH + "getleavestructure",
  APPLY_LEAVE: BASE_URL + ATTENDANCE_PATH + "employeeleaveapply",
  //  ============= Attendance API =============================

  // USER_MANAGEMENT-ROLE-CREATE MODULE
  // GET_ALL_ROLE: BASE_URL + ROLE_PATH + "getroles",
  CHANGE_ROLE_STATUS: BASE_URL + ROLE_PATH + "active",
  ADD_NEW_ROLE: BASE_URL + ROLE_PATH + "createrole",
  UPDATE_ROLE: BASE_URL + ROLE_PATH + "modify",
  GET_EMPLOYEE_NAMES: BASE_URL + "api/attendance/" + "getemployeesnames",
  SEARCH_ROLE_API: BASE_URL + ROLE_PATH + "rolesearch",
  // USER_MANAGEMENT-ROLE-CREATE MODULE 

  // USER_MANAGEMENT-ROLE-ASSIGN MODULE
  GET_ALL_APPROVE_USERS: BASE_URL + ROLE_PATH + "assignrole/getall",
  GET_ALL_ASSIGN_USERS: BASE_URL + ROLE_PATH + "searchassign",
  GET_ALL_USERNAMES: BASE_URL + USER_PATH + "userlist",
  GET_ALL_ROLE_NAMES: BASE_URL + ROLE_PATH + "getroles",
  ASSIGN_ROLE: BASE_URL + ROLE_PATH + "assignrole",
  GET_USER_ROLE_EDIT_DATA: BASE_URL + ROLE_PATH + "getuseroles",
  // USER_MANAGEMENT-ROLE-ASSIGN MODULE

  // USER MANAGEMENT => PERMISSIONS
  GET_ALL_PERMISSIONS: BASE_URL + ROLE_PATH + "permissions/getall",
  GER_PERMISSIONS_BY_ROLEID: BASE_URL + ROLE_PATH + "permissions/getbyrole",
  UPDATE_PERMISSIONS: BASE_URL + ROLE_PATH + "permissions/add",
  // USER MANAGEMENT => PERMISSIONS

  //  ====================== Task Management ===========================
  // GET_TASK_LIST: BASE_URL + TASK_PATH + "gettasklist",
  GET_TASK_LIST: BASE_URL + "api/taskmanagement/gettasklist",
  GET_TEAM_TASK_LIST: BASE_URL + TASK_PATH + "getteamtasklists",
  GET_PROJECT_TASK_LIST: BASE_URL + TASK_PATH + "projecttasklist",
  GET_TASK_APPROVE_LIST: BASE_URL + TASK_PATH + "taskapprovelist",
  TASK_APPROVE: BASE_URL + TASK_PATH + "approvetask",
  ADD_TASK: BASE_URL + TASK_PATH + "addtaskorupdatetask",
  GET_TASK_BY_ID: BASE_URL + TASK_PATH + "gettaskbyid",
  PROJECTS_NAMES: BASE_URL + TASK_PATH + "getempprojnames",
  //  ====================== TIME - SHEET Management ===========================
  PROJECTS_NAMES: BASE_URL + TIME_SHEET + "projectnames",
  TIME_SHEET_DETAILS: BASE_URL + TIME_SHEET + "timesheetdetails",
  GET_MP_TASK: BASE_URL + TIME_SHEET + "getemptask",
  TIMESHEET_LIST: BASE_URL + TIME_SHEET + "timesheetentrylist",
  UPDATE_TIMESHEET: BASE_URL + TIME_SHEET + "updatetimesheet",
  ADD_TIMESHEET: BASE_URL + TIME_SHEET + "entertimesheet",
  TIME_CALENDER_HISTORY: BASE_URL + TIME_SHEET + "gettimesheethistory",
  APPROVED_PROJECT: BASE_URL + TIME_SHEET + "approveandreject",
  TIMESHEET_HISTORY: BASE_URL + TIME_SHEET + "TimesheetHistory",
  TIMESHETT_APPROVECOUNT: BASE_URL + TIME_SHEET + "TimeSheetApprcount",
  TIMESHEET_APPROVE_DETAILS: BASE_URL + TIME_SHEET + "TimesheetApprDetails",
  TIMESHEET_APPROVE_REJECT: BASE_URL + TIME_SHEET + "ApproveAndReject",
  DELETE_TIME_SHEET: BASE_URL + TIME_SHEET + "deletetimesheet",
  TIME_SHEET_UPDATE_VIEW: BASE_URL + TIME_SHEET + "gettimesheetdetails",

  //  ====================== PRJECT - SHEET Management ===========================
  PROJECT_SCHEDUILE_LIST: BASE_URL + PRJECT_PATH + "ProjectScheduleList",
  PROJECT_RESOURCE_LIST: BASE_URL + PRJECT_PATH + "projectresourcelist",
  PROJECT_TEAM_TASK: BASE_URL + PRJECT_PATH + "projectteamtask",

  //  ====================== ORGANIZATION - SHEET Management ===========================
  HOLIDAY_EVENT_API: BASE_URL + ORGANIZATION_PATH + "gethoildayandevents",
  CRATE_ANNOUNCEMENT: BASE_URL + ORGANIZATION_PATH + "createannouncement",
  ORGANIZATION_BRANCH: BASE_URL + ORGANIZATION_PATH + "organizationbranches",
  ORGANIZATION_TEAM: BASE_URL + ORGANIZATION_PATH + "organizationteams",
  EMPLOYEE_NAMES: BASE_URL + ORGANIZATION_PATH + "getemployeesnames",
  MY_ANNOUNCEMENTS: BASE_URL + ORGANIZATION_PATH + "getmyannouncements",
  UPDATE_ANNOUNCEMENTS: BASE_URL + ORGANIZATION_PATH + "updateannoucement",
  DELETE_ANNOUNCEMENTS: BASE_URL + ORGANIZATION_PATH + "deleteanouncement",
  PREVIEW_ANNOUNCEMENTS: BASE_URL + ORGANIZATION_PATH + "getannoucementpreviewlist",
  ALL_ANNOUNCEMENTS_LIST: BASE_URL + ORGANIZATION_PATH + "getallannoucementlist",
  UPDATE_VIEW_COUNT: BASE_URL + ORGANIZATION_PATH + "updateviewedcount",
  VIEW_MEMBER_LIST: BASE_URL + ORGANIZATION_PATH + "viewmemberlist",

  //==============Node apis for chat===============
  SEARCH_ALL: BASE_URL_CHAT + "/search-all?search_key=",
  CREATE_CHATROOM: BASE_URL_CHAT + "/chat/private-chat",
  GET_PRIVATE_CHAT_CONVERSATION: BASE_URL_CHAT + "/chat/private-chat/get-conversation?schannel_id=",
  GET_RECENTCHATS: BASE_URL_CHAT + "/chat/private-chat/get-chats-list",
  UPLOAD_CHAT_FILES: BASE_URL_CHAT + "/chat/private-chat/handleUpload",
  PIN_CHAT: BASE_URL_CHAT + "/chat/private-chat/pin-chat",
  UNPIN_CHAT: BASE_URL_CHAT + "/chat/private-chat/unpin-chat",
  SET_STATUS: BASE_URL_CHAT + "/chat/private-chat/change-status",
  GET_FILES: BASE_URL_CHAT + "/chat/private-chat/getFiles?schannel_id=",
  CREATE_SUB_CHANNEL: BASE_URL_CHAT + "/chat/group-chat/create-subchannel",

  // ============ TASK MANAGEMENT (SUB MODULE) ========
  GET_TASK_PROJECTLIST: BASE_URL + "api/taskmanagement/projectlist",
  GET_PROJECT_LIST_ADMIN: BASE_URL + "api/taskmanagement/tasklistbyadmin",
  POST_TASK_BY_ADMIN: BASE_URL + "api/taskmanagement/addtaskbypjtadmin",
  EDIT_TASK_BY_ID: BASE_URL + "api/taskmanagement/getprojecttaskbyid",
  GET_TASK_NAME_MODAL: BASE_URL + "api/taskmanagement/standardtasklist",
  UPDATE_TASK_BY_ADMIN: BASE_URL + "api/taskmanagement/updatetaskbyadmin",

  // Task Allocation list (SUB MODULE) ===========
  GET_TASK_ALLOCATION_LIST: BASE_URL + "api/taskmanagement/taskallocationlist",
  GET_EMPLOYEE_NAME_LIST: BASE_URL + "api/taskmanagement/empnamebyprojectassign",
  SAVE_TASK_ALLOCATION: BASE_URL + "api/taskmanagement/taskallocations",
  GET_OUTSOURCE_ALLOCATION_LIST: BASE_URL + "api/taskmanagement/empnameoutsourcing",

  // Abort Task (SUB MODULE) ===========
  ABORT_TASK_LIST_DATA: BASE_URL + "api/taskmanagement/aborttasklist",
  ABORT_TASK_POST: BASE_URL + "api/taskmanagement/aborttask",

  // Hold Task (SUB MODULE) ===========
  HOLD_TASK_LIST: BASE_URL + "api/taskmanagement/holdtasklist",
  HOLD_TASK_CLICK: BASE_URL + "api/taskmanagement/holdtask",

  // Standard Task (SUB MODULE) ===========
  GET_TEAMS_LIST_STANDARD_TASK: BASE_URL + "api/taskmanagement/getteams",
  ADD_STANDARD_TASK: BASE_URL + "api/taskmanagement/addstandardtask",
  STANDARD_TASK_BY_ID: BASE_URL + "api/taskmanagement/standardtaskbyid",
  UPDATE_STANDARD_TASK_LIST: BASE_URL + "api/taskmanagement/updatestandardtask",
  DELETE_STANDARD_TASK: BASE_URL + "api/taskmanagement/deletestandardtask",

  // Complete Task (SUB MODULE) ===========
  GET_LIST_OF_COMPLETE_TASK: BASE_URL + "api/taskmanagement/taskcompletionlist",
  ABORT_COMPLETE_TASK: BASE_URL + "api/taskmanagement/completetask",

  // Export File  (SUB MODULE) ===========
  DOWNLOAD_EXCEL_FILE: BASE_URL + "api/taskmanagement/excelformat",
  POST_EXCEL_FILE_FORMAT: BASE_URL + "api/taskmanagement/importexcel",

  // Client management APis
  GET_CLIENT_MANAG_LIST: BASE_URL + "api/projectclientmaster/getprjclientlist",
  ADD_CLIENT_DATA: BASE_URL + "api/projectclientmaster/client",
  EDIT_CLIENT_DATA: BASE_URL + "api/projectclientmaster/client",
  DELETE_CLIENT_BY_ID: BASE_URL + "api/projectclientmaster/deleteclient",
  GET_UPDATE_CLIENT_DATA: BASE_URL + "api/projectclientmaster/getclient",
  GET_PROJECT_LIST_DD: BASE_URL + "api/attendance/getprojectlist",

  // DAshboard Apis
  GET_INPROGRESS_DATA_LIST: BASE_URL + "api/dashboard/taskinprogress",
  GET_COMPLETED_DATA_LIST: BASE_URL + "api/dashboard/completetask",


  // Project module 
  GET_MODAL_CLIENT_OPTIONS: BASE_URL + "api/project/getclientlist",
  GET_DEPARTMENT_MODAL_OPTIONS: BASE_URL + "api/project/getdepartmentlist",
  GET_ADMIN_NAMES_MODAL_OPTIONS: BASE_URL + "api/project/getemployeelist",
  GET_PROJECT_LIST: BASE_URL + "api/project/getprojectlist",
  ADD_PROJECT: BASE_URL + "api/project/addproject",
  POST_DATA_WITH_PROJECT_ID: BASE_URL + "api/project/editbyprojectid",
  DELETE_PROJECT: BASE_URL + "api/project/deleteproject",
  UPDATE_PROJECT: BASE_URL + "api/project/updateproject",
  GET_EMPLOYEE_NAMES_LIST: BASE_URL + "api/timesheet/employeenames",
  POST_EMPLOYEE_CREDENTIALS: BASE_URL + "api/timesheet/employeetimesheets",
  GET_PROJECTNAMES_LIST: BASE_URL + "api/timesheet/projectname",
  POST_TIMESHEET_DETAILS: BASE_URL + "api/timesheet/projecttimesheet",

  // PROJETC SCHEDUL APIs
  GET_ASSIGNED_PROJECT_LIST: BASE_URL + PROJECT_PATH + "assignmentlist",
  GET_PROJECTS_NAMES: BASE_URL + PROJECT_PATH + "getprojectlist",
  GET_DROPDOWN_EMPLOYEE_NAMES: BASE_URL + PROJECT_PATH + "getemployeelist",
  ASSIGN_PROJECT: BASE_URL + PROJECT_PATH + "projectassingement",
  DEASSIGN_PROJECT: BASE_URL + PROJECT_PATH + "projectdeassigned",

  // COMPLIANCE MODULE APIs
  GET_DROPDOWNEMPLOYEE_LIST: DEVELOPEMENT_URL + "compliance/teamnotassigndropdown",
  GET_TEAMNOTASSIGNEDLIST_DATA: BASE_URL + "compliance/teamnotassignedlist",
  GET_PROJECTNOTASSIGNED_LIST: BASE_URL + "compliance/projectnotassign",
  GET_PROJECTASSIGNED_LIST: BASE_URL + "compliance/assignedlist",
  GET_PROJECTDEASSIGN_LIST: BASE_URL + "compliance/deassignedlist",
  GET_TWOORMOREPROJECTS_LIST: BASE_URL + "compliance/morethantwoproject",
  GET_PROJECTNOTADDED_LIST: BASE_URL + "compliance/tasknotadded",
  GET_PROJECTNOTAPPROVED_LIST: BASE_URL + "compliance/tasknotapproved",
  GET_TIMESHEETNOTENTERED_LIST: BASE_URL + "compliance/timesheetnotentered",
  GET_TIMESHEETNOTAPPROVED_LIST: BASE_URL + "compliance/timesheetnotapproved",
  GET_TIMEPERIODOVER_LIST: BASE_URL + "compliance/timeperiodover",
  GET_BENCHLIST_DATA: BASE_URL + "compliance/benchlist",

  // Project Costing
  GET_DROPDOWNTEAMNAME_LIST: BASE_URL + "api/project/teamnames",
  GET_DESIGNATIONDD_LIST: BASE_URL + "api/project/designationsname",
  POST_COST_DATA: BASE_URL + "api/project/addemployeecosting",
  GET_EMPLOYEE_LIST: BASE_URL + "api/project/costinglist",
  GET_DATA_WITH_ID: BASE_URL + "api/project/getbyidcost",
  POST_UPDATE_COST: BASE_URL + "api/project/updatecosting",
  DELETE_SINGLE_DATA: BASE_URL + "api/project/deletecost",
  GET_PROJECTFORECAST_LIST: BASE_URL + "api/project/projectcostingreport",
  POST_WITH_ID_FORCAST: BASE_URL + "api/project/getprojectforcast" ,

  // TeamPreference
  CREATE_TEAM : BASE_URL + "api/teampreference/createteam",
  TEAM_HEAD_lIST : BASE_URL + "api/attendance/getemployeesnames",
  GET_TEAM_LIST : BASE_URL + "api/teampreference/getteamlist",
  UPDATE_TEAM : BASE_URL + "api/teampreference/updateteams",

  // Holiday and calendar API's
  GET_HOLIDAYS_LIST : BASE_URL + "api/holiday/getholidaylist"
};

export default ApiConfig;
