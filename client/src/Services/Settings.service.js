import axios from 'axios';

export const getSettings = (id) => {
    return axios.get(`https://thanku.ngrok.io/api/setting/get?shopId=${id}`).then(res => {
        if (res?.status === 200) {
            return res.data
        } else {
            return res;
        }
        
});
}

export const addSettings = (payload) => {
    return axios.post(`https://thanku.ngrok.io/api/setting/add`, payload).then(res => {
        if (res?.status === 200) {
            return res.data
        } else {
            return res;
        }
});
}

export const updateSettings = (payload) => {
    return axios.post(`https://thanku.ngrok.io/api/setting/update`, payload).then(res => {
        if (res?.status === 200) {
            return res.data
        } else {
            return res;
        }
});
}

export const urlDectrption = (payload) => {
    // console.log("payload urlDectrption", payload.shopName);
    return axios.get(`https://thanku.ngrok.io/api/setting/url?shop=${payload.shopName}`).then(res => {
        if (res?.status === 200) {
            return res.data
        } else {
            return res;
        }

    });
   
}

export const getProducts = (shopId) => {
    return axios.get(`https://thanku.ngrok.io/api/setting/getProducts?shopId=${shopId}`).then(res => {
        if (res?.status === 200) {
            return res.data
        } else {
            return res;
        }

    });
}

export const getCollections = (shopId) => {
    return axios.get(`https://thanku.ngrok.io/api/setting/getCollections?shopId=${shopId}`).then(res => {
        if (res?.status === 200) {
            return res.data
        } else {
            return res;
        }

    });
}

