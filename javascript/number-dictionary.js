'use strict';

const numberDictionary = [

    {
        "question": "1",
        "answerEnglish": ["one"],
        "answerJapanese": ["一", "いち", "ichi"],
        "answerSpanish": ["uno"],
        "range": "1-10"
    },

    {
        "question": "2",
        "answerEnglish": ["two"],
        "answerJapanese": ["二", "に", "ni"],
        "answerSpanish": ["dos"],
        "range": "1-10"
    },

    {
        "question": "3",
        "answerEnglish": ["three"],
        "answerJapanese": ["三", "さん", "san"],
        "answerSpanish": ["tres"],
        "range": "1-10"
    },

    {
        "question": "4",
        "answerEnglish": ["four"],
        "answerJapanese": ["四", "し", "shi", "よん", "yon"],
        "answerSpanish": ["cuatro"],
        "range": "1-10"
    },

    {
        "question": "5",
        "answerEnglish": ["five"],
        "answerJapanese": ["五", "ご", "go"],
        "answerSpanish": ["cinco"],
        "range": "1-10"
    },

    {
        "question": "6",
        "answerEnglish": ["six"],
        "answerJapanese": ["六", "ろく", "roku"],
        "answerSpanish": ["seis"],
        "range": "1-10"
    },

    {
        "question": "7",
        "answerEnglish": ["seven"],
        "answerJapanese": ["七", "しち", "shichi", "なな", "nana"],
        "answerSpanish": ["siete"],
        "range": "1-10"
    },

    {
        "question": "8",
        "answerEnglish": ["eight"],
        "answerJapanese": ["八", "はち", "hachi"],
        "answerSpanish": ["ocho"],
        "range": "1-10"
    },

    {
        "question": "9",
        "answerEnglish": ["nine"],
        "answerJapanese": ["九", "く", "きゅう", "ku", "kyuu", "kyu", "kyū"],
        "answerSpanish": ["nueve"],
        "range": "1-10"
    },

    {
        "question": "10",
        "answerEnglish": ["ten"],
        "answerJapanese": ["十", "じゅう", "ju", "juu", "jū"],
        "answerSpanish": ["diez"],
        "range": "1-10"
    },

    {
        "question": "11",
        "answerEnglish": ["eleven"],
        "answerJapanese": ["十一", "じゅういち", "juichi", "juuichi", "jūichi", "ju ichi", "juu ichi", "jū ichi", "ju-ichi", "juu-ichi", "jū-ichi"],
        "answerSpanish": ["once"],
        "range": "1-20"
    },

    {
        "question": "12",
        "answerEnglish": ["twelve"],
        "answerJapanese": ["十二", "じゅうに", "juni", "juuni", "jūni", "ju ni", "juu ni", "jū ni", "ju-ni", "juu-ni", "jū-ni"],
        "answerSpanish": ["doce"],
        "range": "1-20"
    },

    {
        "question": "13",
        "answerEnglish": ["thirteen"],
        "answerJapanese": ["十三", "じゅうさん", "jusan", "juusan", "jūsan", "ju san", "juu san", "jū san", "ju-san", "juu-san", "jū-san"],
        "answerSpanish": ["trece"],
        "range": "1-20"
    },

    {
        "question": "14",
        "answerEnglish": ["fourteen"],
        "answerJapanese": ["十四", "じゅうよん", "juyon", "juuyon", "jūyon", "ju yon", "juu yon", "jū yon", "ju-yon", "juu-yon", "jū-yon", "じゅうし", "jushi", "juushi", "jūshi", "ju shi", "juu shi", "jū shi", "ju-shi", "juu-shi", "jū-shi"],
        "answerSpanish": ["catorce"],
        "range": "1-20"
    },

    {
        "question": "15",
        "answerEnglish": ["fifteen"],
        "answerJapanese": ["十五", "じゅうご", "jugo", "juugo", "jūgo", "ju go", "juu go", "jū go", "ju-go", "juu-go", "jū-go"],
        "answerSpanish": ["quince"],
        "range": "1-20"
    },

    {
        "question": "16",
        "answerEnglish": ["sixteen"],
        "answerJapanese": ["十六", "じゅうろく", "juroku", "juuroku", "jūroku", "ju roku", "juu roku", "jū roku", "ju-roku", "juu-roku", "jū-roku"],
        "answerSpanish": ["dieciséis", "dieciseis"],
        "range": "1-20"
    },

    {
        "question": "17",
        "answerEnglish": ["seventeen"],
        "answerJapanese": ["十七", "じゅうしち", "jushichi", "juushichi", "jūshichi", "ju shichi", "juu shichi", "jū shichi", "ju-shichi", "juu-shichi", "jū-shichi", "じゅうなな", "junana", "juunana", "jūnana", "ju nana", "juu nana", "jū nana", "ju-nana", "juu-nana", "jū-nana"],
        "answerSpanish": ["diecisiete"],
        "range": "1-20"
    },

    {
        "question": "18",
        "answerEnglish": ["eighteen"],
        "answerJapanese": ["十八", "じゅうはち", "juhachi", "juuhachi", "jūhachi", "ju hachi", "juu hachi", "jū hachi", "ju-hachi", "juu-hachi", "jū-hachi"],
        "answerSpanish": ["dieciocho"],
        "range": "1-20"
    },

    {
        "question": "19",
        "answerEnglish": ["nineteen"],
        "answerJapanese": ["十九", "じゅうく", "juku", "juuku", "jūku", "ju ku", "juu ku", "jū ku", "ju-ku", "juu-ku", "jū-ku", "じゅうきゅう", "jukyuu", "juukyuu", "jūkyuu", "ju kyuu", "juu kyuu", "jū kyuu", "ju-kyuu", "juu-kyuu", "jū-kyuu", "jukyu", "juukyu", "jūkyu", "ju kyu", "juu kyu", "jū kyu", "ju-kyu", "juu-kyu", "jū-kyu", "jukyū", "juukyū", "jūkyū", "ju kyū", "juu kyū", "jū kyū", "ju-kyū", "juu-kyū", "jū-kyū"],
        "answerSpanish": ["diecinueve"],
        "range": "1-20"
    },

    {
        "question": "20",
        "answerEnglish": ["twenty"],
        "answerJapanese": ["二十", "にじゅう", "niju", "nijuu", "nijū", "ni ju", "ni juu", "ni jū", "ni-ju", "ni-juu", "ni-jū"],
        "answerSpanish": ["veinte"],
        "range": "1-20"
    },

    {
        "question": "21",
        "answerEnglish": ["twenty-one", "twenty one", "twentyone"],
        "answerJapanese": [""],
        "answerSpanish": ["veintiuno"],
        "range": "1-100"
    },

    {
        "question": "22",
        "answerEnglish": ["twenty-two", "twenty two", "twentytwo"],
        "answerJapanese": [""],
        "answerSpanish": ["veintidós", "veintidos"],
        "range": "1-100"
    },

    {
        "question": "23",
        "answerEnglish": ["twenty-three", "twenty three", "twentythree"],
        "answerJapanese": [""],
        "answerSpanish": ["veintitrés", "veintitres"],
        "range": "1-100"
    },

    {
        "question": "24",
        "answerEnglish": ["twenty-four", "twenty four", "twentyfour"],
        "answerJapanese": [""],
        "answerSpanish": ["veinticuatro"],
        "range": "1-100"
    },

    {
        "question": "25",
        "answerEnglish": ["twenty-five", "twenty five", "twentyfive"],
        "answerJapanese": [""],
        "answerSpanish": ["veinticinco"],
        "range": "1-100"
    },

    {
        "question": "26",
        "answerEnglish": ["twenty-six", "twenty six", "twentysix"],
        "answerJapanese": [""],
        "answerSpanish": ["veintiséis", "veintiseis"],
        "range": "1-100"
    },

    {
        "question": "27",
        "answerEnglish": ["twenty-seven", "twenty seven", "twentyseven"],
        "answerJapanese": [""],
        "answerSpanish": ["veintisiete"],
        "range": "1-100"
    },

    {
        "question": "28",
        "answerEnglish": ["twenty-eight", "twenty eight", "twentyeight"],
        "answerJapanese": [""],
        "answerSpanish": ["veintiocho"],
        "range": "1-100"
    },

    {
        "question": "29",
        "answerEnglish": ["twenty-nine", "twenty nine", "twentynine"],
        "answerJapanese": [""],
        "answerSpanish": ["veintinueve"],
        "range": "1-100"
    },

    {
        "question": "30",
        "answerEnglish": ["thirty"],
        "answerJapanese": [""],
        "answerSpanish": ["treinta"],
        "range": "1-100"
    }
];