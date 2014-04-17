Ext.define("Apm.view.desktop.Taskbar", {
    extend: "Ext.toolbar.Toolbar",
    alias: "widget.taskbar",
    id: "taskbar",
    
    enableOverflow: true,
    initComponent: function(){
        this.items = [
            {
                text: 'Menu',
                menu: {
                    items: [
                        {
                            text: 'Company',
                            action: 'win-company',
                            iconCls: 'sm-company'
                        },
                        {
                            text: 'News',
                            action: 'win-news',
                            iconCls: 'sm-news'
                        },
                        {
                            text: 'Videos',
                            action: 'videos'
                        }
                    ]
                }
            },
            '-'
        ];
        this.callParent(arguments);
    }
});