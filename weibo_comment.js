function JSON.parse($response.body) {
    if (body.hasOwnProperty('datas')) {
        if (body.datas.hasOwnProperty('type')) {
            body.datas.type != 1;
        }
    }
    return body;
}

let body = $response.body;
let body = JSON.parse($response.body);
body = JSON.stringify(body);
$done({body});
