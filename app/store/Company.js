Ext.define("Apm.store.Company", {
    extend: "Ext.data.Store",    
       
    model: "Apm.model.Company",
    proxy: {
        type: "ajax",
        url: Apm.util.Config.getApiUrl() +"company/get",
        reader: {
            type: "json",
            root: "data",
            totalProperty: "total"
        }
    }
});