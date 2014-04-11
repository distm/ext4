Ext.define('Apm.view.company.Window', {
    extend: 'Apm.core.Window',
    alias: 'widget.win-company',
    id: "win-company",
    
    width: 700,
    height: 350,
    
    items: [
        {xtype: 'grid-company'}
    ]
});