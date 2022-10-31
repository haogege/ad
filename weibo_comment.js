let obj = JSON.parse($response.body);
// 过滤评论（评论中嵌套的回复详情界面也会用这个 api，但那里没有 datas）
// adType: '推荐/广告', type: 1
if (obj.hasOwnProperty('datas'))
    obj['datas'] = body['datas'].filter(element => (element['type'] !== 1));
$done({body: JSON.stringify(obj)});
