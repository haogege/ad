function modify(url, body) {
    if (url.includes("/interface/sdk/sdkad.php")) {
        let temp = body.match(/\{.*\}/);
        if (!temp) return body;
        body = JSON.parse(temp);
        body.ads = [];
        body.background_delay_display_time = 60 * 60 * 24;
        body.lastAdShow_delay_display_time = 60 * 60 * 24;
        body.realtime_ad_video_stall_time = 1;
        body.realtime_ad_timeout_duration = 1;
        body.show_push_splash_ad = false;
        return JSON.stringify(body) + "OK";
    } else if (url.includes("/wbapplua/wbpullad.lua")) {
        body = JSON.parse(body);
        if (body.hasOwnProperty('cached_ad')) {
            body.cached_ad.ads = []
        }
        return JSON.stringify(body);
    }
    return body;
}

const url = $request.url;
let body = $response.body;
body = modify(url, body);
$done({ body: body });