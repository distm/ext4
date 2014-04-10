<html>
    <head>
        <title>App</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" href="ext4/resources/css/ext-all.css" />
        <link rel="stylesheet" type="text/css" href="app/resources/css/desktop.css" />
    </head>
    <body>

        <script type="text/javascript" src="ext4/ext-all.js"></script>
        <script type="text/javascript">
            Ext.Loader.setPath({
                'Ext.ux.desktop': 'app/desktop/ux',
                MyDesktop: 'app/desktop'
            });

            Ext.require('MyDesktop.App');

            var myDesktopApp;
            Ext.onReady(function() {
                myDesktopApp = new MyDesktop.App();
            });
        </script>
    </body>
</html>
