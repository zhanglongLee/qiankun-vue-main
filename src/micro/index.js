import NProgress from 'nprogress'
import "nprogress/nprogress.css";
import { Message } from 'element-ui'
import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    start,
    // setDefaultMountApp
} from 'qiankun'

// 微应用注册信息
import apps from './apps'
/**
 * 注册微应用
 * 第一个参数 - 微应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
 registerMicroApps(apps,{
    //  qiankun 生命周期钩子 - 微应用加载前
    beforeLoad: (app)=>{
        // 加载微应用前，加载进度条
        NProgress.start()
        console.log("before load", app.name)
        return Promise.resolve()
    },
    // qiankun 生命周期钩子 - 微应用加载后
    afterMount: (app)=>{
        // 加载微应用前，进度条加载完成
        NProgress.done()
        console.log("after mount", app.name)
        return Promise.resolve()
    }
 })

 addGlobalUncaughtErrorHandler((event)=>{
    console.error(event)
    const { message } = event
    if(message && message.includes("died in status LOADING_SOURCE_CODE")){
        Message.error(message)
    }
 })
//  setDefaultMountApp('/vue/user')
//  导出 qiankun 的启动函数
export default start