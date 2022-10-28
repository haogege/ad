function modify(url, body) {
    if (url.includes("/comments/build_comments")) {
        body = JSON.parse(body);
        if (body.hasOwnProperty('datas')) {
            body.datas.type === 1
        }
        return JSON.stringify(body);
    }
    return body;
}

const url = $request.url;
let body = $response.body;
body = modify(url, body);
$done({ body: body });
