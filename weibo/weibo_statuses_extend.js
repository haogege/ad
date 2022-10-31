let body = $response.body;
body = JSON.parse(body);
if (body.hasOwnProperty('trend')) {
    delete body['trend'];
    body = JSON.stringify(body);
    $done({body});
}
else
    $done({});
