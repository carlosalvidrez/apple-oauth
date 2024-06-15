Package.describe({
    name: 'carlosalvidrez:apple-oauth',
    version: '4.0.1-beta',
    summary: 'Sign in with Apple OAuth flow - fork from bigowl',
    git: 'https://github.com/carlosalvidrez/apple-oauth',
});

Package.onUse(function(api) {
    api.versionsFrom(['1.9', '2.3']); //, '3.0.0-rc.4'
    api.use('ecmascript');
    api.use('base64');
    api.use('accounts-base@3.0.0-rc300.4', ['client', 'server']);
    api.use('oauth2', ['client', 'server']);
    api.use('oauth@3.0.0-rc300.3', ['client', 'server']);
    api.use('http', ['server']);
    api.use(['service-configuration'], ['client', 'server']);
    api.use(['random'], 'client');
    api.addFiles('apple_server.js', 'server');
    api.addFiles('apple_client.js', 'client');
    api.mainModule('namespace.js');
    api.export('Apple');
});

Npm.depends({
    'jsonwebtoken': '8.5.1',
    'jwks-rsa': '1.6.0',
    'semver-lite': '0.0.6'
});

Cordova.depends({
    'cordova-plugin-sign-in-with-apple': '0.1.1',
    'cordova-plugin-device': '2.1.0'
});