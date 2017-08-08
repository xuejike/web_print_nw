/**
 * Created by xuejike on 2017/8/8.
 * 参数说明
 *
 autoprint {Boolean} whether to print without the need for user’s interaction; optional, true by default
 printer {String} the device name of the printer returned by nw.Window.getPrinters(); No need to set this when printing to PDF
 pdf_path {String} the path of the output PDF when printing to PDF
 headerFooterEnabled {Boolean} whether to enable header and footer
 landscape {Boolean} whether to use landscape or portrait
 mediaSize {JSON Object} the paper size spec
 shouldPrintBackgrounds {Boolean} whether to print CSS backgrounds
 marginsType {Integer} 0 - Default; 1 - No margins; 2 - minimum; 3 - Custom, see marginsCustom.
 marginsCustom {JSON Object} the custom margin setting; units are points.
 copies {Integer} the number of copies to print.
 headerString {String} string to replace the URL in the header.
 footerString {String} string to replace the URL in the footer.
 marginsCustom example: "marginsCustom":{"marginBottom":54,"marginLeft":70,"marginRight":28,"marginTop":32}
 mediaSize example: 'mediaSize':{'name': 'CUSTOM', 'width_microns': 279400, 'height_microns': 215900, 'custom_display_name':'Letter', 'is_default': true}

 */
function printUrl(url,opt,succFun,errFun){
    var def={
        "url":url,
        "autoprint":true,
        "footerString":"",
        "headerString":"",
        "marginsType":1,
        "shouldPrintBackgrounds":true
    };
    $.extend(def,opt);
    $.post("http://127.0.0.1:9999/print",JSON.stringify(def),function (res) {
        if(res.success){
            if(succFun){
                succFun(res.message);
            }
        }else{
            if(errFun){
                errFun(res.message);
            }
        }
    })
}
/**
 * 创建纸张大小 单位毫米
 * @param width
 * @param height
 */
function printCreatePage(width, height) {

    var paper={"name": "custom_paper",
        "width_microns": width*1000, "height_microns": height*1000,
        "custom_display_name":"custom_paper", "is_default": true}
        return paper;
}