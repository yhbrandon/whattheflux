export default {
  ROOTURL: "http://127.0.0.1:8080/",
  reducerActions: {
  	SET      :  "SET",
    REQUEST  :  "REQUEST",
    RECEIVE  :  "RECEIVE",
    ERROR    :  "ERROR",
    CALL_API :  "CALL_API",
    CALL_APP :  "CALL_APP"
  },
  gaActions: {
    ROUTE: "@@router/LOCATION_CHANGE",
    CALL_EVENT: "CALL_GA_EVENT"
  }
}
