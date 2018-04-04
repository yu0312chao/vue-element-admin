import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/exceldata/list',
    method: 'get',
    params: query
  })
}
