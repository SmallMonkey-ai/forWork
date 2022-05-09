import Axios from "axios";
export default {
    //获取验证码
    async login_to_code(account) {
        const data = await Axios.get(`/sand/rest/user/loginRandomCode`, {
            params: {
                account
            }
        });
        return data.data
    },
    //登录
    async login(login, passwd) {
        const data = await Axios.get(`/sand/anon/user/patrol/loginTo2/V1.0`, {
            params: {
                login, passwd, remember: false
            }
        });
        return data.data
    },
    //登录
    async loginTwo(login, passwd ,plantId) {
        const data = await Axios.get(`/sand/anon/user/patrol/loginTo3/V1.0`, {
            params: {
                login, passwd, remember: false,plantId
            }
        });
        return data.data
    },

    //首页获取列表
    async get_list(phone, startTime, endTime,rowStart,pageSize) {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/getWorkOrder`, {
            params: {
                phone, startTime, endTime,rowStart,pageSize
            }
        });
        if(data.request.responseURL.includes('/sand/rest/user/login')){
            data.data.islogin =true
        }
        return data.data
    },

    async get_upload_id() {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/getUploadId`);
        if(data.request.responseURL.includes('/sand/rest/user/login')){
            data.data.islogin =true
        }
        return data.data
    },
    //司机登入页面获取id
    async get_car_upload_id() {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/getUploadId`);
        return data.data
    },

    //司机登入页面提交
    async submit_car_work_order(file_name3, upload_id3,file_name4, upload_id4, driverNam,idCard,plantId) {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/saveInformation`, {
            params: {
                file_name3, upload_id3,file_name4, upload_id4, driverName,idCard,plantId
            }
        });
        return data.data
    },

    //司机登入页面提交
    async submit_Driver_work_order(file_name3, upload_id3,file_name4, upload_id4, driverName,driverNumber,plantId) {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/saveDriverInformation`, {
            params: {
                file_name3, upload_id3,file_name4, upload_id4, driverName,driverNumber,plantId
            }
        });
        return data.data
    },

    //司机登入页面提交
    async submit_Vehicle_work_order(file_name2, upload_id2,weight, plate,plantId) {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/saveVehicleInformation`, {
            params: {
                file_name2, upload_id2, weight, plate,plantId
            }
        });
        return data.data
    },
    //司机登录
    async carLogin() {
        const data = await Axios.get(`/sand/rest/user/login`, {
            params: { login:'cementPlantAdmin', passwd:'aaaabb'}
        });
        return data.data
    },

    async submit_work_order(file_name, upload_id, file_name1, upload_id1, resultWeight, spotCheck, workOrderId, obj_id) {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/submitWorkOrder`, {
            params: {
                file_name, upload_id, file_name1, upload_id1, resultWeight, spotCheck, workOrderId, obj_id
            }
        });
        if(data.request.responseURL.includes('/sand/rest/user/login')){
            data.data.islogin =true
        }
        return data.data
    },

    //登出
    async vueLogout() {
        const data = await Axios.get(`/sand/rest/user/vueLogout`);
        return data
    },

    async get_one_work_order(obj_id) {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/getOneWorkOrder`, {
            params: { obj_id }
        });
        if(data.request.responseURL.includes('/sand/rest/user/login')){
            data.data.islogin =true
        }
        return data.data
    },

    async get_cement_plant(phone) {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/getCementPlant`, {
            params: { phone, }
        });
        if(data.request.responseURL.includes('/sand/rest/user/login')){
            data.data.islogin =true
        }
        return data.data
    },

    async get_work_order_list_result(phone, rowStart, pageSize, obj_id, startTime, endTime, licensePlate,) {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/getCementPlantWorkOrder`, {
            params: { phone, obj_id, startTime, endTime, pageSize, rowStart, licensePlate }
        });
        if(data.request.responseURL.includes('/sand/rest/user/login')){
            data.data.islogin =true
        }
        return data.data
    },

    async get_today_police(phone) {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/getTodayPolice`, {
            params: { phone }
        });
        if(data.request.responseURL.includes('/sand/rest/user/login')){
            data.data.islogin =true
        }
        return data.data
    },

    //获取我的信息
    async get_police_information() {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/getPoliceInformation`);
        if(data.request.responseURL.includes('/sand/rest/user/login')){
            data.data.islogin =true
        }
        return data.data
    },

    async spot_check_work_order(obj_id) {
        const data = await Axios.get(`/sand/rest/cementPlant/v1_0/anonConmentPlantRest/spotCheckWorkOrder`,{
            params:{obj_id}
        });
        if(data.request.responseURL.includes('/sand/rest/user/login')){
            data.data.islogin =true
        }
        return data.data
    },
}