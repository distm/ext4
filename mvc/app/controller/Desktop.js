Ext.define("Apm.controller.Desktop", {
    extend: "Ext.app.Controller",
    
    views: [
        'desktop.Taskbar'
    ],
    
    init: function() {        
        this.control({
            "taskbar [action^=win-']": {                
                click: function(btn){
                    // show window
                }
            }
        });        
    }    
});