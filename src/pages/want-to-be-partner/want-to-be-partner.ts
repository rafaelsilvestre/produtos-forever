import { AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'page-want-to-be-partner',
    templateUrl: './want-to-be-partner.html',
    styleUrls: ['./want-to-be-partner.scss']
})
export class WantToBePartnerPageComponent implements AfterViewInit {
    player: any;
    lastPercentage: number;
    showModal: boolean = false;
    path: Array<any> = [
        {path: '/', title: 'Home'},
        {path: '/quero-ser-parceiro', title: 'Quero ser parceiro', active: true}
    ];

    ngAfterViewInit(): void {
        const playerElement = (<any>window).document.getElementById('player-wrapper');
        this.player = new (<any>window).Clappr.Player({
            plugins: [(<any>window).ClapprStats],
            source: 'https://s3-sa-east-1.amazonaws.com/produtos-forever/want-to-be-partner.mp4',
            poster: 'assets/images/video-poster.png',
            mute: false,
            height: '100%',
            width: '100%',
            mediacontrol: {seekbar: '#e19502', buttons: '#e19502'},
            clapprStats: {
                runEach: 2000,
                onReport: (metrics) => {
                    const percentage = Math.floor(metrics.extra.watchedPercentage);

                    if (percentage === 50 && percentage > this.lastPercentage) {
                        this.showModal = true;
                    }

                    if (percentage === 100 && percentage > this.lastPercentage) {
                        this.showModal = true;
                    }

                    this.lastPercentage = percentage;

                    console.log('this.lastPercentage', this.lastPercentage);
                },
                runBandwidthTestEvery: 10
            }
        });
        this.player.attachTo(playerElement);

        const resize = () => {
            const aspectRatio = 9 / 16;
            const newWidth = (<any>window).document.getElementById('player-wrapper').parentElement.offsetWidth;
            const newHeight = 2 * Math.round(newWidth * aspectRatio / 2);
            this.player.resize({width: (newWidth - 30), height: newHeight});
        };

        resize();
        (<any>window).onresize = resize;
    }
}

