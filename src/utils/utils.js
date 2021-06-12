import moment from "moment";

// Format Unix datetime from openweather api
export const unixFormatter = (dt,format) => {
	return moment(new Date(dt*1000)).format(format)
}