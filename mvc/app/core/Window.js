Ext.define('Apm.core.Window', {
    extend: 'Ext.window.Window',
    minimizable: true,
    maximizable: true,
    title: 'Window',
    
    initComponent: function(){
        this.animateTarget = "btntask-"+ this.id;
        this.listeners = {
            beforeshow: this.beforeWindowShow
        };
        
        this.callParent(arguments);
    },
    
    beforeWindowShow: function(win){
        var btntask = Ext.getCmp(win.animateTarget);
        
        if(typeof btntask == "undefined"){
            console.log("Add Button");
            Ext.getCmp("taskbar").add({
                text: win.title,
                id: win.animateTarget
            });
        }
    }
});