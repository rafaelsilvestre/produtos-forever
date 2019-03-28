import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../../validators/validators';
import Utils from '../../utils/utils';

@Component({
    selector: 'page-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss']
})
export class ContactPageComponent implements AfterViewInit {
    player: any;
    formGroup: FormGroup;
    phoneMask = Utils.getPhoneMask();
    path: Array<any> = [
        {path: '/', title: 'Home'},
        {path: '/fale-conosco', title: 'Contato', active: true}
    ];


    constructor(private formBuilder: FormBuilder) {
        this.formGroup = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, phoneNumberValidator()]],
            state: ['', [Validators.required]],
            city: ['', [Validators.required]],
            intention: ['', [Validators.required]]
        });
    }

    ngAfterViewInit(): void {
        const playerElement = (<any>window).document.getElementById('player-wrapper');
        this.player = new (<any>window).Clappr.Player({
            source: 'https://s3-sa-east-1.amazonaws.com/produtos-forever/want-to-be-partner.mp4',
            poster: 'assets/images/video-poster.png',
            mute: false,
            height: '100%',
            width: '100%',
            mediacontrol: {seekbar: '#e19502', buttons: '#e19502'}
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

    doSubmit(): void {
        const values = this.formGroup.value;

        console.log('Values', values);
    }
}

