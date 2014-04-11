Ext.define("Apm.controller.Desktop", {
    extend: "Ext.app.Controller",
    
    models: [
        'Company'
    ],
    
    stores: [
        'Company'
    ],
    
    views: [
        'desktop.Taskbar',
        'company.Window',
        'company.Grid',
        'news.Window'
    ],
    
    init: function() {        
        this.control({
            "taskbar [action^=win-']": {                
                click: this.showWin
            }
        });        
    },
    
    showWin: function(btn){
        var win = Ext.getCmp(btn.action);
        if(! win) {
            win = Ext.widget(btn.action, {
                title: btn.text,
                iconCls: btn.iconCls
            });
        }
        win.show();
    }
});