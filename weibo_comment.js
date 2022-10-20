function modify(body) {
    if (body.hasOwnProperty('datas')) {
        if (body.datas.hasOwnProperty('type')) {
            body.datas.type != 1;
        }

    }
    return body;
}

let body = $response.body;
body = modify(body);
$done({ body: body });
