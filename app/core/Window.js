Ext.define('Apm.core.Window', {
    extend: 'Ext.window.Window',
    minimizable: true,
    maximizable: true,
    title: 'Window',
    constrain: true,
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
            activate: this.onActive,
            beforeclose: this.onBeforeWindowClose,
            beforeshow: this.onBeforeWindowShow,
            minimize: this.onWindowMinimize
        };
        
        // render to
        this.renderTo = "main-container";
        
        // default call parent
        this.callParent(arguments);
    },
    
    onActive: function(win){
        Ext.getCmp(win.animateTarget).toggle(true);
    },
    
    onBeforeWindowClose: function(){
        Ext.getCmp("taskbar").remove(this.btnTask);
    },
    
    onBeforeWindowShow: function(win){
        var me = this, btntask = Ext.getCmp(win.animateTarget);
        
        if(typeof btntask == "undefined"){
            btntask = Ext.create('Ext.button.Button', {
                text: win.title,
                tooltip: win.title,
                id: win.animateTarget,
                iconCls: win.iconCls,
                toggleGroup: "btntask",
                enableToggle: true,
                maxWidth: 120,
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