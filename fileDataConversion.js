/**
 * Created by LiYonglei on 2016/12/27.
 */
/*
* 二进制字符串转化为base64
* */
function binaryStringToDataURL(data,mimeType){
    return "data:"+mimeType+";"+"base64,"+window.btoa(data);
};
/*
* base64转化为二进制字符串
* */
function dataURLToBinaryString(data){
    return window.atob(data.replace(/.*base64,/,""));
};
/*
* 二进制数据缓冲区转化为二进制字符串
* */
function arrayBufferToBinaryString(data){
    /*
     * 当文件太大的时候使用下面的代码
     * return String.fromCharCode.apply(null,new Uint8Array(data));
     * 会导致下面的错误:
     * Uncaught RangeError: Maximum call stack size exceeded
     * 内存溢出???
     * */
    return new Uint8Array(data).reduce(function(target,current){
        return target+String.fromCharCode(current);
    },"");
};
/*
* 二进制字符串转化为二进制数据缓冲区
* */
function binaryStringToArrayBuffer(data){
    return data.split("").reduce(function(target,char,idx){
        target[idx]=char.charCodeAt(0);
        return target;
    },new Uint8Array(new ArrayBuffer(data.length))).buffer;
};
/*
* 二进制数据缓冲区转化为base64
* */
function arrayBufferToDataURL(data,mimeType){
    return binaryStringToDataURL(arrayBufferToBinaryString(data),mimeType);
};
/*
* base64转化为二进制数据缓冲区
* */
function dataURLToArrayBuffer(data){
    return binaryStringToArrayBuffer(dataURLToBinaryString(data));
};
