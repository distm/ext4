Ext.define('Apm.core.Window', {
    extend: 'Ext.window.Window',
    minimizable: true,
    maximizable: true,
    title: 'Window',
    constrain: true,
    renderTo: "main-container",
    closeAction: "destroy",
    layout: "fit",
    bodyStyle: {
        backgroundColor: '#FFF'
    },
    
    initComponent: function(){
        // set animate target
        this.animateTarget = "btntask-"+ this.id;
        
        // add listeners
        this.listeners = {
            beforeclose: this.onBeforeWindowClose,
            beforeshow: this.onBeforeWindowShow,
            minimize: this.onWindowMinimize
        };
        
        // default call parent
        this.callParent(arguments);
    },
    
    onBeforeWindowClose: function(){
        Ext.getCmp("taskbar").remove(this.btnTask);
    },
    
    onBeforeWindowShow: function(win){
        var me = this, btntask = Ext.getCmp(win.animateTarget);
        
        if(typeof btntask == "undefined"){
            btntask = Ext.create('Ext.button.Button', {
                text: win.title,
                id: win.animateTarget,
                iconCls: win.iconCls,
                toggleGroup: "btntask",
                enableToggle: true,
                listeners: {
                    afterrender: function(){
                        this.toggle(true);
                    }
                },
                handler: function(){
                    var w = Ext.getCmp(win.id);
                    if(w.isVisible()){
                        var zmgr = me.zIndexManager,
                            a = zmgr.getActive();
                    
                        if(a.id == me.id){
                            w.hide();
                            this.toggle(false);
                        } else {
                            win.setActive(true);
                        }
                    } else {
                        w.show();
                        this.toggle(true);
                    }                        
                }
            });
            Ext.getCmp("taskbar").add(btntask);
        }
        
        // save btn
        me.btnTask = btntask;
    },
    
    onWindowMinimize: function(win){
        win.hide();
        this.btnTask.toggle(false);
    }
    
});