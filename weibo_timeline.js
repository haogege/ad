function modify(body) {
    body['advertises'] = []
    body['ad'] = []
    return body
}

const url = $request.url
let body = $response.body
body = JSON.stringify(modify(JSON.parse(body)))
$done({ body: body })
