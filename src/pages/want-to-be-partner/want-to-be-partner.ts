import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'page-want-to-be-partner',
    templateUrl: './want-to-be-partner.html',
    styleUrls: ['./want-to-be-partner.scss']
})
export class WantToBePartnerPageComponent implements AfterViewInit {
    player: any;
    path: Array<any> = [
        {path: '/', title: 'Home'},
        {path: '/quero-ser-parceiro', title: 'Quero ser parceiro', active: true}
    ];

    ngAfterViewInit(): void {
        const playerElement = (<any>window).document.getElementById('player-wrapper');
        this.player = new (<any>window).Clappr.Player({
            source: 'https://s3-sa-east-1.amazonaws.com/produtos-forever/want-to-be-partner.mp4',
            mute: false,
            height: '100%',
            width: '100%'
        });
        this.player.attachTo(playerElement);

        this.resizePlayer();
        (<any>window).onresize = this.resizePlayer;
    }

    resizePlayer() {
        const aspectRatio = 9 / 16;
        const newWidth = (<any>window).document.getElementById('player-wrapper').parentElement.offsetWidth;
        const newHeight = 2 * Math.round(newWidth * aspectRatio / 2);

        this.player.resize({width: newWidth, height: newHeight});
    }
}

