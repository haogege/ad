let body = JSON.parse($response.body);
// 过滤评论（评论中嵌套的回复详情界面也会用这个 api，但那里没有 datas）
// adType: '推荐/广告', type: 1
if (body.hasOwnProperty('datas'))
    body['datas'] = body['datas'].filter(element => !(element['type'] === 1));
    body['datas'] = body['datas'].filter(element => (element['commentAdType'] === 1));
    body['datas'] = body['datas'].filter(item.adType.includes('推荐'|'广告'));
$done({body: JSON.stringify(body)});


//https://api.weibo.cn/2/statuses/container_timeline
const url = $request.url;
let body = $response.body;

function filter_timeline_cards(datas) {
    const gg_words = ['推荐内容', '热推', '广告', '推荐'];
    if (cards && cards.length > 0) {
        let j = cards.length;
        while (j--) {
            let item = cards[j];
            if (item.data) {
              if (item.data.mblogtypename && gg_words.includes(item.data.mblogtypename)) {
                console.log(item.data.timestamp_text, j)
                cards.splice(j, 1);
              }
            }
            
        }
    }
    return cards;
}

let obj = JSON.parse(body);
if (obj.items) obj.items = filter_timeline_cards(obj.items);
body = JSON.stringify(obj);
$done({ body });
