Ext.define("Apm.view.company.WindowDetail", {
    //extend: "Ext.window.Window",
    extend: "Apm.core.Window",
    alias: "widget.win-detail-company",
    
    width: 550,
    height: 500,
    renderTo: Ext.getBody(),
    constrain: true,
    
    initComponent: function(){
        
        this.items = [
            {
                xtype: "tabpanel",
                tabPosition: "left",
                layout: "fit",
                margin: "-1",
                defaults: {
                    autoScroll: true,
                    bodyPadding: 10
                },
                items: [
                    {
                        xtype: "company-detail-general"
                    },
                    {
                        title: "Quote Stock"
                    },
                    {
                        title: "Management"
                    },
                    {
                        title: "Subsidiaries"
                    },
                    {
                        title: "Followers"
                    },
                    {
                        title: "Administrator"
                    }
                ]
            }
        ];
        this.callParent(arguments);
    }
});