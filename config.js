const config = $.ajax({
    type:"get",
    url:"config.json",
    async:false,
    cache:false,
}).responseJSON;