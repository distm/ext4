Ext.define("Apm.view.company.Grid", {
    extend: "Ext.grid.Panel",
    alias: "widget.grid-company",
    
    border: 0,
    store: "Company",
    
    initComponent: function(){
        
        this.columns = [
            {xtype: 'rownumberer'},
            {header: "Code",            dataIndex: "code"},
            {header: "Name",            dataIndex: "name"},
            {header: "Summary",         dataIndex: "summary"},
            {header: "Description",     dataIndex: "description"},
            {header: "Logo",            dataIndex: "logo"},
            {header: "Address",         dataIndex: "address"},
            {header: "Phone",           dataIndex: "phone"},
            {header: "Fax",             dataIndex: "fax"},
            {header: "Email",           dataIndex: "email"},
            {header: "Website",         dataIndex: "website"},
            {header: "Established",     dataIndex: "established"},
            {header: "Listing Date",    dataIndex: "listing"},
            {header: "Underwriter",     dataIndex: "underwriter"},
            {header: "Sales Breakdown", dataIndex: "sales_breakdown"},
            {header: "Group Name",      dataIndex: "group_name"},
            {header: "Featured",        dataIndex: "featured"},
            {header: "Date Modified",   dataIndex: "datemodified"}
        ];
        
        this.callParent(arguments);
    },
    
    listeners: {
        afterrender: function(){
            this.store.load();
        }
    }
});