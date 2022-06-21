import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private name: any;
  selectedLang: 'en';
  constructor(private appService: AppService,private sanitizer: DomSanitizer) {}
  languageList: any = {
    af: 'afrikaans',
    sq: 'albanian',
    am: 'amharic',
    ar: 'arabic',
    hy: 'armenian',
    az: 'azerbaijani',
    eu: 'basque',
    be: 'belarusian',
    bn: 'bengali',
    bs: 'bosnian',
    bg: 'bulgarian',
    ca: 'catalan',
    ceb: 'ce buano',
    ny: 'chichewa',
    'zh-cn': 'chinese (simplified)',
    'zh-tw': 'chinese (traditional)',
    co: 'corsican',
    hr: 'croatian',
    cs: 'czech',
    da: 'danish',
    nl: 'dutch',
    en: 'english',
    eo: 'esperanto',
    et: 'estonia n',
    tl: 'filipino',
    fi: 'finnish',
    fr: 'french',
    fy: 'frisian',
    gl: 'galician',
    ka: 'georgian',
    de: 'german',
    el: 'greek',
    gu: 'gujarati',
    ht: 'haitian creole',
    ha: 'hausa',
    haw: 'hawaiian',
    iw: 'hebre w',
    hi: 'hindi',
    hmn: 'hmong',
    hu: 'hungarian',
    is: 'icelandic',
    ig: 'igbo',
    id: 'indonesian',
    ga: 'irish',
    it: 'italian',
    ja: 'japanese',
    jw: 'javanese',
    kn: 'kannada',
    kk: 'kazakh',
    km: 'khmer',
    ko: 'korean',
    ku: 'kurdish (kurmanji)',
    ky: 'kyrgyz',
    lo: 'lao',
    la: 'latin',
    lv: 'latvian',
    lt: 'lith uanian',
    lb: 'luxembourgish',
    mk: 'macedonian',
    mg: 'malagasy',
    ms: 'malay',
    ml: 'malayalam',
    mt: 'mal tese',
    mi: 'maori',
    mr: 'marathi',
    mn: 'mongolian',
    my: 'myanmar (burmese)',
    ne: 'nepali',
    no: 'norwegian',
    ps: 'pashto',
    fa: 'persian',
    pl: 'polish',
    pt: 'portuguese',
    pa: 'punjabi',
    ro: 'romanian',
    ru: 'russian',
    sm: 'samoan',
    gd: 'scots gaelic',
    sr: 'serbian',
    st: 'sesotho',
    sn: 'shona',
    sd: 'sindh i',
    si: 'sinhala',
    sk: 'slovak',
    sl: 'slovenian',
    so: 'somali',
    es: 'spanish',
    su: 'sundanese',
    sw: 'swahili',
    sv: 'swedish',
    tg: 'tajik',
    ta: 'tamil',
    te: 'telugu',
    th: 'thai',
    tr: 'turkish',
    uk: 'uk rainian',
    ur: 'urdu',
    uz: 'uzbek',
    vi: 'vietnamese',
    cy: 'welsh',
    xh: 'xhosa',
    yi: 'yiddish',
    yo: 'y oruba',
    zu: 'zulu',
    fil: 'Filipino',
    he: 'Hebrew',
  };
  /*
    Write code obtaining data from service on initialization and displaying object field
  */
    downloadJsonHref:any;
  dataInput: any;
  dataoflang: any;
  stringData: string = '';
  ngOnInit() {}
  onTranslate() {
    this.dataoflang = JSON.parse(this.dataInput);
    // let lastKey = Object.keys(this.dataoflang).pop();
    for (let item in this.dataoflang) {
      for (let p in this.dataoflang[item]) {
        debugger;
        // let lastKeyIn = Object.keys(this.dataoflang[item]).pop();
        this.appService
          .getTranslation(this.dataoflang[item][p], this.selectedLang)
          .subscribe((response) => {
            let prod = response[0][0][0];
            this.dataoflang[item][p] = prod;
            this.stringData = JSON.stringify(this.dataoflang, null, 4);
          });
      }
    }
  }
  generateDownloadJsonUri() {
    var theJSON = JSON.stringify(this.stringData);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
}
}
