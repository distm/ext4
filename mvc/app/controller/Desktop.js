Ext.define("Apm.controller.Desktop", {
    extend: "Ext.app.Controller",
    
    views: [
        'desktop.Taskbar',
        'company.Window'
    ],
    
    init: function() {        
        this.control({
            "taskbar [action^=win-']": {                
                click: this.showWin
            }
        });        
    },
    
    showWin: function(btn){
        Ext.widget(btn.action).show();
    }
});