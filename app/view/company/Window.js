Ext.define('Apm.view.company.Window', {
    extend: 'Apm.core.Window',
    alias: 'widget.win-company',
    id: "win-company",
    
    width: 850,
    height: 450,
    
    items: [
        {xtype: 'grid-company'}
    ]
});