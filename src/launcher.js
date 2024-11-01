(function() {
    function main() {
        _inst_drcore.start()
        console.log("main finished")
    }
    var _inst_dh2common = dh2common();
    var _inst_drakon_canvas = drakon_canvas();
    var _inst_drakonhubwidget_10 = drakonhubwidget_10();
    var _inst_drconfig = drconfig();
    var _inst_drcore = drcore();
    var _inst_edit_tools = edit_tools();
    var _inst_html_0_1 = html_0_1();
    var _inst_http_0_1 = http_0_1();
    var _inst_simplewidgets_0_1 = simplewidgets_0_1();
    var _inst_utils = utils();
    _inst_dh2common.drakon_canvas = _inst_drakon_canvas;
    _inst_dh2common.gconfig = _inst_drconfig;
    _inst_dh2common.html = _inst_html_0_1;
    _inst_dh2common.http = _inst_http_0_1;
    _inst_dh2common.utils = _inst_utils;
    _inst_dh2common.widgets = _inst_simplewidgets_0_1;
    _inst_drakon_canvas.edit_tools = _inst_edit_tools;
    _inst_drakon_canvas.html = _inst_html_0_1;
    _inst_drakon_canvas.tracing = _inst_drcore;
    _inst_drakon_canvas.utils = _inst_utils;
    _inst_drakonhubwidget_10.drakon_canvas = _inst_drakon_canvas;
    _inst_drakonhubwidget_10.gconfig = _inst_drconfig;
    _inst_drakonhubwidget_10.html = _inst_html_0_1;
    _inst_drakonhubwidget_10.tracing = _inst_drcore;
    _inst_drakonhubwidget_10.utils = _inst_utils;
    _inst_drakonhubwidget_10.widgets = _inst_simplewidgets_0_1;
    _inst_drcore.dh2common = _inst_dh2common;
    _inst_drcore.drakon_canvas = _inst_drakon_canvas;
    _inst_drcore.drakonhubwidget = _inst_drakonhubwidget_10;
    _inst_drcore.gconfig = _inst_drconfig;
    _inst_drcore.html = _inst_html_0_1;
    _inst_drcore.http = _inst_http_0_1;
    _inst_drcore.utils = _inst_utils;
    _inst_drcore.widgets = _inst_simplewidgets_0_1;
    _inst_edit_tools.utils = _inst_utils;
    _inst_simplewidgets_0_1.gconfig = _inst_drconfig;
    _inst_simplewidgets_0_1.html = _inst_html_0_1;
    _inst_simplewidgets_0_1.tracing = _inst_drcore;
    _inst_simplewidgets_0_1.utils = _inst_utils;


    _inst_drcore.launcher = window.electronAPI;
    window.electronAPI.clipboardUpdated((_event, type, content) => {
        _inst_drcore.clipboardUpdated(type, content)
    })
    window.electronAPI.runMenuItem((_event, code) => {
        _inst_drcore.runMenuItem(code)
    })

    main();
})();
