/**
 * 引入路由文件
 * param file 文件在view下面
 */
export function _import(file){
    return require('@view/'+file+'.vue').default
}