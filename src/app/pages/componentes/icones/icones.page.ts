import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-icones',
  templateUrl: './icones.page.html',
  styleUrls: ['./icones.page.scss'],
})
export class IconesPage {

  title : string = "Icones";
  listaApp : any = [
    "accessibility-sharp","add-sharp","add-circle-sharp","airplane-sharp","alarm-sharp","albums-sharp","alert-sharp","alert-circle-sharp",
    "american-football-sharp","analytics-sharp","aperture-sharp","apps-sharp","archive-sharp","arrow-back-sharp","arrow-back-circle-sharp",
    "arrow-down-sharp","arrow-down-circle-sharp","arrow-forward-sharp","arrow-forward-circle-sharp","arrow-redo-sharp","arrow-redo-circle-sharp",
    "arrow-undo-sharp","arrow-undo-circle-sharp","arrow-up-sharp","arrow-up-circle-sharp","at-sharp","at-circle-sharp","attach-sharp","backspace-sharp",
    "bag-sharp","bag-add-sharp","bag-check-sharp","bag-handle-sharp","bag-remove-sharp","balloon-sharp","ban-sharp","bandage-sharp","bar-chart-sharp",
    "barbell-sharp","barcode-sharp","baseball-sharp","basket-sharp","basketball-sharp","battery-charging-sharp","battery-dead-sharp","battery-full-sharp",
    "battery-half-sharp","beaker-sharp","bed-sharp","beer-sharp","bicycle-sharp","bluetooth-sharp","boat-sharp","body-sharp","bonfire-sharp","book-sharp",
    "bookmark-sharp","bookmarks-sharp","bowling-ball-sharp","briefcase-sharp","browsers-sharp","brush-sharp","bug-sharp","build-sharp","bulb-sharp","bus-sharp",
    "business-sharp","cafe-sharp","calculator-sharp","calendar-sharp","calendar-clear-sharp","calendar-number-sharp","call-sharp","camera-sharp",
    "camera-reverse-sharp","car-sharp","car-sport-sharp","card-sharp","caret-back-sharp","caret-back-circle-sharp","caret-down-sharp","caret-down-circle-sharp",
    "caret-forward-sharp","caret-forward-circle-sharp","caret-up-sharp","caret-up-circle-sharp","cart-sharp","cash-sharp","cellular-sharp","chatbox-sharp",
    "chatbox-ellipses-sharp","chatbubble-sharp","chatbubble-ellipses-sharp","chatbubbles-sharp","checkbox-sharp","checkmark-sharp","checkmark-circle-sharp",
    "checkmark-done-sharp","checkmark-done-circle-sharp","chevron-back-sharp","chevron-back-circle-sharp","chevron-collapse-sharp","chevron-down-sharp",
    "chevron-down-circle-sharp","chevron-expand-sharp","chevron-forward-sharp","chevron-forward-circle-sharp","chevron-up-sharp","chevron-up-circle-sharp",
    "clipboard-sharp","close-sharp","close-circle-sharp","cloud-sharp","cloud-circle-sharp","cloud-done-sharp","cloud-download-sharp","cloud-offline-sharp",
    "cloud-upload-sharp","cloudy-sharp","cloudy-night-sharp","code-sharp","code-download-sharp","code-slash-sharp","code-working-sharp","cog-sharp","color-fill-sharp",
    "color-filter-sharp","color-palette-sharp","color-wand-sharp","compass-sharp","construct-sharp","contract-sharp","contrast-sharp","copy-sharp","create-sharp",
    "crop-sharp","cube-sharp","cut-sharp","desktop-sharp","diamond-sharp","dice-sharp","disc-sharp","document-sharp","document-attach-sharp","document-lock-sharp",
    "document-text-sharp","documents-sharp","download-sharp","duplicate-sharp","ear-sharp","earth-sharp","easel-sharp","egg-sharp","ellipse-sharp",
    "ellipsis-horizontal-sharp","ellipsis-horizontal-circle-sharp","ellipsis-vertical-sharp","ellipsis-vertical-circle-sharp","enter-sharp","exit-sharp",
    "expand-sharp","extension-puzzle-sharp","eye-sharp","eye-off-sharp","eyedrop-sharp","fast-food-sharp","female-sharp","file-tray-sharp","file-tray-full-sharp",
    "file-tray-stacked-sharp","film-sharp","filter-sharp","filter-circle-sharp","finger-print-sharp","fish-sharp","fitness-sharp","flag-sharp","flame-sharp",
    "flash-sharp","flash-off-sharp","flashlight-sharp","flask-sharp","flower-sharp","folder-sharp","folder-open-sharp","football-sharp","footsteps-sharp","funnel-sharp",
    "game-controller-sharp","gift-sharp","git-branch-sharp","git-commit-sharp","git-compare-sharp","git-merge-sharp","git-network-sharp","git-pull-request-sharp",
    "glasses-sharp","globe-sharp","golf-sharp","grid-sharp","hammer-sharp","hand-left-sharp","hand-right-sharp","happy-sharp","hardware-chip-sharp","headset-sharp",
    "heart-sharp","heart-circle-sharp","heart-dislike-sharp","heart-dislike-circle-sharp","heart-half-sharp","help-sharp","help-buoy-sharp","help-circle-sharp",
    "home-sharp","hourglass-sharp","ice-cream-sharp","id-card-sharp","image-sharp","images-sharp","infinite-sharp","information-sharp","information-circle-sharp",
    "invert-mode-sharp","journal-sharp","key-sharp","keypad-sharp","language-sharp","laptop-sharp","layers-sharp","leaf-sharp","library-sharp","link-sharp","list-sharp",
    "list-circle-sharp","locate-sharp","location-sharp","lock-closed-sharp","lock-open-sharp","log-in-sharp","log-out-sharp","magnet-sharp","mail-sharp","mail-open-sharp","mail-unread-sharp","male-sharp","male-female-sharp","man-sharp","map-sharp","medal-sharp","medical-sharp","medkit-sharp","megaphone-sharp","menu-sharp","mic-sharp","mic-circle-sharp","mic-off-sharp","mic-off-circle-sharp","moon-sharp","move-sharp","musical-note-sharp","musical-notes-sharp","navigate-sharp","navigate-circle-sharp","newspaper-sharp","notifications-sharp","notifications-circle-sharp","notifications-off-sharp","notifications-off-circle-sharp","nuclear-sharp","nutrition-sharp","open-sharp","options-sharp","paper-plane-sharp","partly-sunny-sharp","pause-sharp","pause-circle-sharp","paw-sharp","pencil-sharp","people-sharp","people-circle-sharp","person-sharp","person-add-sharp","person-circle-sharp","person-remove-sharp","phone-landscape-sharp","phone-portrait-sharp","pie-chart-sharp","pin-sharp","pint-sharp","pizza-sharp","planet-sharp","play-sharp","play-back-sharp","play-back-circle-sharp","play-circle-sharp","play-forward-sharp","play-forward-circle-sharp","play-skip-back-sharp","play-skip-back-circle-sharp","play-skip-forward-sharp","play-skip-forward-circle-sharp","podium-sharp","power-sharp","pricetag-sharp","pricetags-sharp","print-sharp","prism-sharp","pulse-sharp","push-sharp","qr-code-sharp","radio-sharp","radio-button-off-sharp","radio-button-on-sharp","rainy-sharp","reader-sharp","receipt-sharp","recording-sharp","refresh-sharp","refresh-circle-sharp","reload-sharp","reload-circle-sharp","remove-sharp","remove-circle-sharp","reorder-four-sharp","reorder-three-sharp","reorder-two-sharp","repeat-sharp","resize-sharp","restaurant-sharp","return-down-back-sharp","return-down-forward-sharp","return-up-back-sharp","return-up-forward-sharp","ribbon-sharp","rocket-sharp","rose-sharp","sad-sharp","save-sharp","scale-sharp","scan-sharp","scan-circle-sharp","school-sharp","search-sharp","search-circle-sharp","send-sharp","server-sharp","settings-sharp","shapes-sharp","share-sharp","share-social-sharp","shield-sharp","shield-checkmark-sharp","shield-half-sharp","shirt-sharp","shuffle-sharp","skull-sharp","snow-sharp","sparkles-sharp","speedometer-sharp","square-sharp","star-sharp","star-half-sharp","stats-chart-sharp","stop-sharp","stop-circle-sharp","stopwatch-sharp","storefront-sharp","subway-sharp","sunny-sharp","swap-horizontal-sharp","swap-vertical-sharp","sync-sharp","sync-circle-sharp","tablet-landscape-sharp","tablet-portrait-sharp","telescope-sharp","tennisball-sharp","terminal-sharp","text-sharp","thermometer-sharp","thumbs-down-sharp","thumbs-up-sharp","thunderstorm-sharp","ticket-sharp","time-sharp","timer-sharp","today-sharp","toggle-sharp","trail-sign-sharp","train-sharp","transgender-sharp","trash-sharp","trash-bin-sharp","trending-down-sharp","trending-up-sharp","triangle-sharp","trophy-sharp","tv-sharp","umbrella-sharp","unlink-sharp","videocam-sharp","videocam-off-sharp","volume-high-sharp","volume-low-sharp","volume-medium-sharp","volume-mute-sharp","volume-off-sharp","walk-sharp","wallet-sharp","warning-sharp","watch-sharp","water-sharp","wifi-sharp","wine-sharp","woman-sharp",    
  ];
  listaLogo = [
    "logo-alipay","logo-amazon","logo-amplify","logo-android","logo-angular","logo-apple","logo-apple-appstore","logo-apple-ar","logo-behance",
    "logo-bitbucket","logo-bitcoin","logo-buffer","logo-capacitor","logo-chrome","logo-closed-captioning","logo-codepen","logo-css3","logo-designernews",
    "logo-deviantart","logo-discord","logo-docker","logo-dribbble","logo-dropbox","logo-edge","logo-electron","logo-euro","logo-facebook","logo-figma",
    "logo-firebase","logo-firefox","logo-flickr","logo-foursquare","logo-github","logo-gitlab","logo-google","logo-google-playstore","logo-hackernews",
    "logo-html5","logo-instagram","logo-ionic","logo-ionitron","logo-javascript","logo-laravel","logo-linkedin","logo-markdown","logo-mastodon",
    "logo-medium","logo-microsoft","logo-no-smoking","logo-nodejs","logo-npm","logo-octocat","logo-paypal","logo-pinterest","logo-playstation","logo-pwa",
    "logo-python","logo-react","logo-reddit","logo-rss","logo-sass","logo-skype","logo-slack","logo-snapchat","logo-soundcloud","logo-stackoverflow",
    "logo-steam","logo-stencil","logo-tableau","logo-tiktok","logo-tumblr","logo-tux","logo-twitch","logo-twitter","logo-usd","logo-venmo","logo-vercel",
    "logo-vimeo","logo-vk","logo-vue","logo-web-component","logo-wechat","logo-whatsapp","logo-windows","logo-wordpress","logo-xbox","logo-xing","logo-yahoo",
    "logo-yen","logo-youtube"    
  ];
  
  constructor( public navCtrl:NavController, ) {  }
  
  voltar(){ this.navCtrl.back() }
}
