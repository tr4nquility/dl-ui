export class Index {
    configureRouter(config, router) {
        config.map([
            { route: ['', 'list'], moduleId: './list', name: 'list', nav: true, title: 'List' },
            { route: ['listPODL'], moduleId: './listPODL', name: 'listPODL', nav: false, title: 'List PODL' },
            { route: 'view/:id', moduleId: './view', name: 'view', nav: false, title: 'View:Buyer' },
            { route: 'edit/:id', moduleId: './edit', name: 'edit', nav: false, title: 'Edit:Buyer' },
            { route: 'create', moduleId: './create', name: 'create', nav: false, title: 'Create:Buyer' }
        ]);

        this.router = router;
    }
}
