/**
 * Created by xuejike on 2017/8/8.
 * 参数说明
 *
    url  需要打印地址
    opt => { printer:"打印机名称",marginsType:0-正常、1-无边距，2-小边距,3-自定义边距,mediaSize:纸张尺寸,
    marginsCustom:{"marginBottom":54,"marginLeft":70,"marginRight":28,"marginTop":32}}
 */
function printUrl(url,opt,succFun,errFun){
    var def={
        "url":url,
        "autoprint":true,
        "marginsType":1,
        "shouldPrintBackgrounds":true
    };
    $.extend(def,opt);

    $.ajax({
        url: "http://127.0.0.1:9999/print",
        type: "POST",
        data: def,
        success:function(res) {
            if(res.success){
                if(succFun){
                    succFun(res.message);
                }
            }else{
                if(errFun){
                    errFun(res.message);
                }
            }
        },
        error:function() {
            errFun("服务未启动");
        }
    });

}
function checkPrintServer(succFun,errFun) {
    $.ajax({
        url: "http://127.0.0.1:9999/",
        type: "GET",
        success:function(res) {
            if(succFun){
                succFun(res.message);
            }
        },
        error:function() {
            errFun("服务未启动");
        }
    });
}
/**
 * 创建纸张大小 单位毫米
 * @param width
 * @param height
 */
function printCreatePage(width, height) {

    var paper={"name": "custom_paper",
        "width_microns": width*1000, "height_microns": height*1000,
        "custom_display_name":"custom_paper"}
        return paper;
}
/**
 * 开启打印服务
 */
function openPrintServer() {
    window.open("webprint://open");
}

function getPriner(succFun) {
    $.ajax({
        url: "http://127.0.0.1:9999/printer",
        type: "GET",
        success:function(res) {
            if(succFun){
                succFun(res);
            }
        },
        error:function() {
            errFun("服务未启动");
        }
    });
}
