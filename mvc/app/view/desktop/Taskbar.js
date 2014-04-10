Ext.define("Apm.view.desktop.Taskbar", {
    extend: "Ext.toolbar.Toolbar",
    alias: "widget.taskbar",
    id: "taskbar",
    
    initComponent: function(){
        this.items = [
            {
                text: 'Menu',
                menu: {
                    items: [
                        {
                            text: 'Company',
                            action: 'win-company'
                        }
                    ]
                }
            }
        ];
        this.callParent(arguments);
    }
});