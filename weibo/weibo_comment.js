let body = $response.body;
//body = JSON.parse(body);
body['datas'] = body['datas'].filter(element => !(element['type'] === 1));
body = JSON.stringify(body);
$done({body});

/*
let obj = JSON.parse($response.body);
let resultData = obj["datas"].filter((item) => {
  return item["type"] != 1
})
obj["datas"] = resultData;
$done({body:JSON.stringify(obj)});
*/