Ext.define("Apm.view.company.DetailGeneral", {
    extend: "Ext.form.Panel",
    alias: "widget.company-detail-general",
    
    title: "General",
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    initComponent: function(){
        
        this.items = [
            {
                xtype: "textfield",
                fieldLabel: "Code",
                readOnly: true,
                name: "code"
            },
            {
                xtype: "textfield",
                fieldLabel: "Name",
                name: "name"
            },
            {
                xtype: "textfield",
                fieldLabel: "Industry Name",
                name: "industry"
            },
            {
                xtype: "tabpanel",
                defaults: {
                    padding: "5 10"
                },
                items: [
                    {
                        title: "English",
                        items: [
                            {
                                xtype: "textarea",
                                fieldLabel: "Summary",
                                labelAlign: "top",
                                name: "summary[en]",
                                width: "100%"
                            },
                            {
                                xtype: "htmleditor",
                                fieldLabel: "Description",
                                labelAlign: "top",
                                name: "description[en]",
                                enableColors: false,
                                enableFont: false,
                                enableFontSize: false,
                                width: "100%"
                            }
                        ]
                    },
                    {
                        title: "Japanese"
                    }
                ]
            },
            {
                xtype: "textarea",
                fieldLabel: "Address",
                name: "address"
            }
        ];
        this.callParent(arguments);
    }
});