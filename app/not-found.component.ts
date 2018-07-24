import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template: `
    <div>
        Not Found
        <div>
            <a routerLink="/">
                Go Home
            </a>
        </div>
    </div>`
})

export class NotFoundComponent{}