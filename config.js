//使用AJAX加载配置文件
const config = $.ajax({
    type:"get",
    url:"config.json",
    async:false,//同步模式，方便获取数据
    cache:false,//禁用缓存
    dataType:"json"
}).responseJSON;