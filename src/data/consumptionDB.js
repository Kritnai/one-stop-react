const consumptions = [
    {
        image: './images/img-consumption/ENGR.png',
        title: 'โรงอาหารคณะวิศวกรรมศาสตร์',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.5587087053963!2d100.6064247408479!3d14.069191929804166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fede8900001%3A0x475e2e9e2832709a!2z4LmC4Lij4LiH4Lit4Liy4Lir4Liy4Lij4LiE4LiT4Liw4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4Lio4Liy4Liq4LiV4Lij4LmM!5e0!3m2!1sth!2sth!4v1713094404385!5m2!1sth!2sth'
    },
    {
        image: './images/img-consumption/green.png',
        title: 'ศูนย์อาหารกรีนแคนทีน',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d557.620599457875!2d100.60064044724977!3d14.073658655312835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27feb15ae2ddd%3A0xbc170ef244aee183!2z4Lio4Li54LiZ4Lii4LmM4Lit4Liy4Lir4Liy4Lij4LiB4Lij4Li14LiZ4LmB4LiE4LiZ4LiX4Li14LiZIGJ5IOC4i-C4teC4nuC4tSDguJ_guLnguYrguJTguYDguKfguLTguKXguYzguJQgKOC5guC4o-C4h-C4reC4suC4q-C4suC4o-C4geC4peC4suC4h-C4p-C4seC4mSk!5e0!3m2!1sth!2sth!4v1713093866275!5m2!1sth!2sth'
    },
    {
        image: './images/img-consumption/Interzone.png',
        title: 'ตลาดนัดอินเตอร์โซน',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.0107163598761!2d100.59670227007366!3d14.075911704577646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f95451094e5%3A0xe7129ce9003cee53!2z4LiV4Lil4Liy4LiU4LiZ4Lix4LiU4Lit4Li04LiZ4LmA4LiV4Lit4Lij4LmM4LmC4LiL4LiZ!5e0!3m2!1sth!2sth!4v1713094532363!5m2!1sth!2sth'
    },
    {
        image: './images/img-consumption/JC.png',
        title: 'ศูนย์อาหารสังคมศาสตร์ 1 (JC)',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.6208854622028!2d100.60235656550397!3d14.06896824624145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fec26c03a65%3A0x88c0a114552ba116!2z4LmC4Lij4LiH4Lit4Liy4Lir4Liy4Lij4Liq4Lix4LiH4LiE4Lih4Lio4Liy4Liq4LiV4Lij4LmMIDEgKFNDMS9KQyk!5e0!3m2!1sth!2sth!4v1713094294306!5m2!1sth!2sth'
    },
    {
        image: './images/img-consumption/piyachart.png',
        title: 'ศูนย์อาหารปิยชาติ',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.0383978353507!2d100.61042388025162!3d14.072642352669183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fdff1544611%3A0x4c9e58edd5de5d9d!2zRm9vZCBXb3JsZCDguKrguLLguILguLIg4Lit4Liy4LiE4Liy4Lij4Lib4Li04Lii4LiK4Liy4LiV4Li0IOC4hOC4k-C4sOC5geC4nuC4l-C4ouC5jCDguKHguKvguLLguKfguLTguJfguKLguLLguKXguLHguKLguJjguKPguKPguKHguKjguLLguKrguJXguKPguYwg4Lio4Li54LiZ4Lii4LmM4Lij4Lix4LiH4Liq4Li04LiV!5e0!3m2!1sth!2sth!4v1713093959428!5m2!1sth!2sth'
    },
    {
        image: './images/img-consumption/SC.png',
        title: 'ศูนย์อาหารสังคมศาสตร์ 2 (SC)',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7740.2552537691545!2d100.59485291037119!3d14.069639958267107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fec249b9e11%3A0x841db4c982598f4e!2z4LmC4Lij4LiH4Lit4Liy4Lir4Liy4Lij4Liq4Lix4LiH4LiE4Lih4Lio4Liy4Liq4LiV4Lij4LmMIDIgKFNDMik!5e0!3m2!1sth!2sth!4v1713094260778!5m2!1sth!2sth'
    },
    {
        image: './images/img-consumption/SCI.png',
        title: 'ศูนย์อาหารคณะวิทยาศาสตร์',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.87987269064806!2d100.60822713943598!3d14.072573407310966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27ff29d6ad447%3A0xbb258e8046dd1669!2z4LmC4Lij4LiH4Lit4Liy4Lir4Liy4Lij4LiE4LiT4Liw4Lin4Li04LiX4Lii4Liy4Lio4Liy4Liq4LiV4Lij4LmM!5e0!3m2!1sth!2sth!4v1713094499841!5m2!1sth!2sth'
    },
    {
        image: './images/img-consumption/thewson.png',
        title: 'ศูนย์อาหารทิวสนโดม',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7740.029040941678!2d100.58970269821947!3d14.076319841813502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27fbfc401de09%3A0x6184c7b2c6d809f1!2z4Lio4Li54LiZ4Lii4LmM4Lit4Liy4Lir4Liy4Lij4LiX4Li04Lin4Liq4LiZ4LmC4LiU4Lih!5e0!3m2!1sth!2sth!4v1713093504248!5m2!1sth!2sth'
    },
    
]

export default consumptions;