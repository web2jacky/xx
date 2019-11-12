import axios from "axios";
import qs from "qs";
import setting from "../settings";
import local from "./local";

axios.defaults.timeout = 15000;
axios.defaults.baseURL = setting.apiHost;
axios.defaults.headers["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// axios.defaults.headers.common['Authorization'] = `Bearer ` + local.get('token');
// request hook
axios.interceptors.request.use(req => {
  req.data = req.data || {};
  if (local.get("token")) {
    req.data["userId"] = local.get("userId");
    req.data["token"] = local.get("token");
  }
  req.data = qs.stringify(req.data);
  return req;
});

// response hook
axios.interceptors.response.use(
  res => {
    if (res.data === "null") {
      axios.cbError && axios.cbError(res.data);
    }
    return res;
  },
  err => {
    if (err.statusText == "error") {
      axios.cbError();
    } else if (err.statusText == "timeout") {
      axios.timerOut();
    } else {
      axios.cbError && axios.cbError(res.data);
    }
    return err;
  }
);

export default axios;
