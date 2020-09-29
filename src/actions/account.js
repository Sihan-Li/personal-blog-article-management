import * as api from '../api/register';
import {message} from 'antd';

export function getCaptcha(payload = {}){
    return async () => {
        const {data: {code ,message:msg , data:{capture} = {}}} = await api.getCaptcha(payload);
        if (code === 20018){
            message.success(`${msg},验证码为${capture}`)
        }else{
            message.error(msg)
        }
     
    }
}

export function register(payload = {}){
    return async () => {
        const {data: {code ,message:msg }} = await api.getCaptcha(payload);
        if (code === 20018){
            message.success(`${msg}`)
        }else{
            message.error(msg)
        }
     
    }
}