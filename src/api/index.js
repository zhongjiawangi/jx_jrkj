import fetch from '@/utils/fetch'

/**
 * @description: 项目列表
 * @param {object} data 请求参数
 */
export const projectList = (data) => fetch('get', '/messageProject/list', data)
/**
 * @description: 项目详情
 * @param {object} data 请求参数
 * @param {string | number} data.id 项目id
 */
export const projectDetail = (data) => fetch("get", `/messageProject/detail`, data);
