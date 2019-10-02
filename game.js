var ship;
var screen;
var start           = true;
var stars           = [];
var shotsBlue       = [];
var assets          = {};
var enemies         = [ ];
var enemiesPossible = true;


function preload() {
    soundFormats('mp3');
    setup_game();
}

function setup_game() {
    stars            = [{"x":797,"y":962},{"x":763,"y":960},{"x":255,"y":960},{"x":752,"y":960},{"x":735,"y":958},{"x":300,"y":956},{"x":39,"y":954},{"x":220,"y":954},{"x":149,"y":950},{"x":52,"y":950},{"x":116,"y":948},{"x":509,"y":948},{"x":350,"y":948},{"x":15,"y":946},{"x":61,"y":944},{"x":390,"y":944},{"x":145,"y":940},{"x":138,"y":938},{"x":500,"y":936},{"x":270,"y":936},{"x":248,"y":936},{"x":658,"y":936},{"x":604,"y":932},{"x":441,"y":932},{"x":339,"y":932},{"x":631,"y":930},{"x":32,"y":930},{"x":537,"y":930},{"x":10,"y":928},{"x":578,"y":924},{"x":450,"y":922},{"x":480,"y":920},{"x":304,"y":918},{"x":112,"y":918},{"x":240,"y":916},{"x":272,"y":914},{"x":61,"y":914},{"x":363,"y":910},{"x":172,"y":908},{"x":92,"y":908},{"x":785,"y":906},{"x":40,"y":906},{"x":731,"y":906},{"x":141,"y":904},{"x":795,"y":902},{"x":133,"y":902},{"x":339,"y":902},{"x":783,"y":900},{"x":273,"y":900},{"x":538,"y":900},{"x":557,"y":898},{"x":74,"y":898},{"x":402,"y":896},{"x":183,"y":894},{"x":360,"y":894},{"x":572,"y":890},{"x":685,"y":888},{"x":129,"y":888},{"x":767,"y":886},{"x":291,"y":886},{"x":507,"y":886},{"x":7,"y":884},{"x":146,"y":884},{"x":335,"y":884},{"x":418,"y":882},{"x":168,"y":882},{"x":556,"y":880},{"x":55,"y":880},{"x":351,"y":878},{"x":713,"y":876},{"x":211,"y":874},{"x":288,"y":870},{"x":123,"y":870},{"x":189,"y":870},{"x":582,"y":868},{"x":297,"y":868},{"x":108,"y":866},{"x":54,"y":866},{"x":101,"y":866},{"x":206,"y":864},{"x":525,"y":864},{"x":650,"y":862},{"x":95,"y":862},{"x":55,"y":860},{"x":627,"y":860},{"x":364,"y":860},{"x":555,"y":858},{"x":87,"y":858},{"x":349,"y":856},{"x":379,"y":854},{"x":419,"y":854},{"x":494,"y":854},{"x":397,"y":850},{"x":569,"y":848},{"x":189,"y":846},{"x":443,"y":842},{"x":616,"y":840},{"x":197,"y":838},{"x":376,"y":838},{"x":85,"y":838},{"x":621,"y":836},{"x":247,"y":834},{"x":590,"y":832},{"x":112,"y":828},{"x":480,"y":828},{"x":410,"y":826},{"x":101,"y":824},{"x":31,"y":824},{"x":733,"y":822},{"x":52,"y":820},{"x":555,"y":818},{"x":359,"y":818},{"x":249,"y":816},{"x":127,"y":816},{"x":122,"y":814},{"x":796,"y":814},{"x":378,"y":812},{"x":703,"y":812},{"x":343,"y":812},{"x":160,"y":806},{"x":82,"y":806},{"x":442,"y":804},{"x":214,"y":804},{"x":579,"y":802},{"x":499,"y":800},{"x":750,"y":800},{"x":315,"y":800},{"x":270,"y":798},{"x":72,"y":798},{"x":238,"y":798},{"x":658,"y":796},{"x":22,"y":796},{"x":380,"y":794},{"x":673,"y":792},{"x":205,"y":790},{"x":647,"y":788},{"x":110,"y":788},{"x":776,"y":788},{"x":267,"y":786},{"x":168,"y":784},{"x":463,"y":784},{"x":324,"y":784},{"x":94,"y":782},{"x":314,"y":782},{"x":769,"y":778},{"x":233,"y":778},{"x":163,"y":776},{"x":200,"y":774},{"x":12,"y":774},{"x":713,"y":772},{"x":266,"y":772},{"x":492,"y":770},{"x":80,"y":768},{"x":677,"y":766},{"x":785,"y":764},{"x":283,"y":762},{"x":340,"y":762},{"x":326,"y":760},{"x":622,"y":760},{"x":352,"y":758},{"x":644,"y":758},{"x":479,"y":758},{"x":59,"y":756},{"x":500,"y":756},{"x":482,"y":754},{"x":46,"y":754},{"x":214,"y":754},{"x":395,"y":754},{"x":646,"y":752},{"x":90,"y":752},{"x":401,"y":752},{"x":550,"y":750},{"x":86,"y":746},{"x":424,"y":746},{"x":581,"y":744},{"x":217,"y":744},{"x":69,"y":742},{"x":346,"y":740},{"x":57,"y":740},{"x":156,"y":740},{"x":646,"y":738},{"x":703,"y":738},{"x":331,"y":738},{"x":680,"y":736},{"x":232,"y":736},{"x":460,"y":736},{"x":603,"y":736},{"x":519,"y":732},{"x":233,"y":730},{"x":794,"y":726},{"x":655,"y":724},{"x":369,"y":724},{"x":109,"y":722},{"x":150,"y":722},{"x":553,"y":720},{"x":549,"y":720},{"x":210,"y":720},{"x":475,"y":718},{"x":175,"y":716},{"x":501,"y":716},{"x":429,"y":714},{"x":511,"y":712},{"x":298,"y":712},{"x":395,"y":712},{"x":665,"y":710},{"x":797,"y":708},{"x":475,"y":706},{"x":772,"y":706},{"x":403,"y":706},{"x":753,"y":702},{"x":117,"y":700},{"x":576,"y":700},{"x":635,"y":698},{"x":316,"y":698},{"x":63,"y":698},{"x":264,"y":698},{"x":782,"y":696},{"x":180,"y":696},{"x":208,"y":692},{"x":222,"y":692},{"x":162,"y":692},{"x":525,"y":690},{"x":285,"y":690},{"x":287,"y":688},{"x":733,"y":686},{"x":42,"y":682},{"x":235,"y":680},{"x":89,"y":676},{"x":729,"y":674},{"x":188,"y":670},{"x":318,"y":670},{"x":510,"y":670},{"x":353,"y":668},{"x":635,"y":668},{"x":329,"y":664},{"x":323,"y":664},{"x":179,"y":664},{"x":244,"y":662},{"x":52,"y":662},{"x":782,"y":662},{"x":403,"y":658},{"x":441,"y":656},{"x":239,"y":656},{"x":477,"y":654},{"x":361,"y":652},{"x":486,"y":648},{"x":797,"y":648},{"x":356,"y":646},{"x":630,"y":646},{"x":34,"y":646},{"x":348,"y":640},{"x":392,"y":640},{"x":282,"y":640},{"x":714,"y":640},{"x":55,"y":638},{"x":239,"y":638},{"x":209,"y":638},{"x":133,"y":636},{"x":425,"y":636},{"x":567,"y":636},{"x":448,"y":634},{"x":737,"y":634},{"x":409,"y":632},{"x":775,"y":632},{"x":10,"y":630},{"x":126,"y":628},{"x":455,"y":628},{"x":408,"y":626},{"x":691,"y":626},{"x":561,"y":624},{"x":745,"y":624},{"x":282,"y":620},{"x":106,"y":618},{"x":492,"y":618},{"x":225,"y":618},{"x":108,"y":614},{"x":513,"y":614},{"x":200,"y":614},{"x":769,"y":612},{"x":34,"y":612},{"x":670,"y":612},{"x":31,"y":610},{"x":770,"y":608},{"x":81,"y":608},{"x":360,"y":606},{"x":6,"y":602},{"x":365,"y":602},{"x":407,"y":602},{"x":789,"y":600},{"x":738,"y":598},{"x":232,"y":596},{"x":207,"y":596},{"x":77,"y":596},{"x":627,"y":592},{"x":646,"y":592},{"x":311,"y":590},{"x":760,"y":588},{"x":219,"y":586},{"x":634,"y":584},{"x":750,"y":584},{"x":538,"y":584},{"x":678,"y":584},{"x":503,"y":582},{"x":502,"y":576},{"x":166,"y":576},{"x":492,"y":572},{"x":542,"y":570},{"x":336,"y":570},{"x":128,"y":564},{"x":318,"y":564},{"x":491,"y":564},{"x":375,"y":562},{"x":339,"y":558},{"x":140,"y":558},{"x":421,"y":556},{"x":420,"y":556},{"x":757,"y":556},{"x":550,"y":554},{"x":180,"y":554},{"x":134,"y":552},{"x":302,"y":550},{"x":280,"y":550},{"x":243,"y":548},{"x":356,"y":548},{"x":338,"y":548},{"x":781,"y":546},{"x":704,"y":546},{"x":460,"y":546},{"x":502,"y":544},{"x":175,"y":544},{"x":543,"y":540},{"x":600,"y":540},{"x":779,"y":540},{"x":149,"y":538},{"x":439,"y":538},{"x":258,"y":538},{"x":759,"y":536},{"x":409,"y":536},{"x":647,"y":534},{"x":566,"y":534},{"x":551,"y":534},{"x":528,"y":532},{"x":47,"y":530},{"x":611,"y":530},{"x":627,"y":530},{"x":608,"y":528},{"x":580,"y":526},{"x":224,"y":526},{"x":409,"y":524},{"x":112,"y":524},{"x":741,"y":522},{"x":693,"y":520},{"x":397,"y":520},{"x":585,"y":520},{"x":32,"y":520},{"x":466,"y":518},{"x":742,"y":518},{"x":644,"y":516},{"x":63,"y":516},{"x":333,"y":516},{"x":378,"y":514},{"x":219,"y":514},{"x":8,"y":510},{"x":148,"y":508},{"x":75,"y":508},{"x":418,"y":506},{"x":167,"y":506},{"x":497,"y":506},{"x":206,"y":504},{"x":628,"y":504},{"x":248,"y":504},{"x":233,"y":502},{"x":518,"y":502},{"x":90,"y":500},{"x":330,"y":496},{"x":574,"y":496},{"x":650,"y":494},{"x":778,"y":494},{"x":56,"y":494},{"x":703,"y":490},{"x":416,"y":490},{"x":775,"y":490},{"x":425,"y":488},{"x":110,"y":488},{"x":687,"y":488},{"x":735,"y":486},{"x":632,"y":486},{"x":149,"y":486},{"x":147,"y":486},{"x":643,"y":484},{"x":195,"y":484},{"x":610,"y":482},{"x":601,"y":480},{"x":95,"y":478},{"x":296,"y":478},{"x":369,"y":478},{"x":604,"y":474},{"x":754,"y":474},{"x":241,"y":472},{"x":8,"y":470},{"x":286,"y":468},{"x":70,"y":468},{"x":251,"y":464},{"x":167,"y":464},{"x":586,"y":464},{"x":514,"y":462},{"x":788,"y":462},{"x":205,"y":460},{"x":76,"y":460},{"x":99,"y":454},{"x":306,"y":454},{"x":477,"y":450},{"x":265,"y":448},{"x":76,"y":448},{"x":647,"y":448},{"x":712,"y":446},{"x":174,"y":444},{"x":128,"y":442},{"x":736,"y":442},{"x":630,"y":440},{"x":417,"y":440},{"x":308,"y":438},{"x":132,"y":436},{"x":746,"y":432},{"x":424,"y":432},{"x":587,"y":430},{"x":18,"y":428},{"x":720,"y":428},{"x":151,"y":428},{"x":756,"y":426},{"x":443,"y":422},{"x":424,"y":422},{"x":653,"y":422},{"x":111,"y":420},{"x":384,"y":420},{"x":212,"y":418},{"x":648,"y":418},{"x":608,"y":416},{"x":690,"y":414},{"x":201,"y":414},{"x":374,"y":414},{"x":663,"y":410},{"x":60,"y":410},{"x":772,"y":410},{"x":518,"y":408},{"x":759,"y":404},{"x":557,"y":402},{"x":436,"y":402},{"x":232,"y":400},{"x":374,"y":398},{"x":681,"y":398},{"x":397,"y":396},{"x":475,"y":390},{"x":344,"y":386},{"x":272,"y":384},{"x":486,"y":382},{"x":614,"y":382},{"x":570,"y":380},{"x":293,"y":380},{"x":745,"y":374},{"x":0,"y":374},{"x":774,"y":372},{"x":756,"y":372},{"x":740,"y":372},{"x":444,"y":368},{"x":409,"y":368},{"x":514,"y":366},{"x":7,"y":360},{"x":372,"y":360},{"x":753,"y":358},{"x":62,"y":354},{"x":385,"y":352},{"x":110,"y":350},{"x":150,"y":350},{"x":270,"y":348},{"x":89,"y":346},{"x":671,"y":344},{"x":664,"y":342},{"x":105,"y":342},{"x":203,"y":342},{"x":774,"y":342},{"x":716,"y":340},{"x":667,"y":338},{"x":237,"y":338},{"x":591,"y":336},{"x":703,"y":336},{"x":513,"y":334},{"x":200,"y":334},{"x":340,"y":330},{"x":122,"y":330},{"x":703,"y":330},{"x":300,"y":328},{"x":565,"y":326},{"x":476,"y":326},{"x":673,"y":326},{"x":574,"y":326},{"x":486,"y":324},{"x":334,"y":322},{"x":532,"y":322},{"x":249,"y":320},{"x":38,"y":316},{"x":603,"y":312},{"x":429,"y":308},{"x":395,"y":308},{"x":132,"y":306},{"x":746,"y":300},{"x":549,"y":300},{"x":581,"y":298},{"x":17,"y":296},{"x":588,"y":296},{"x":400,"y":296},{"x":220,"y":294},{"x":472,"y":292},{"x":534,"y":292},{"x":50,"y":290},{"x":786,"y":288},{"x":149,"y":288},{"x":308,"y":286},{"x":631,"y":286},{"x":627,"y":286},{"x":425,"y":284},{"x":102,"y":284},{"x":673,"y":282},{"x":132,"y":276},{"x":130,"y":276},{"x":414,"y":276},{"x":170,"y":276},{"x":402,"y":274},{"x":33,"y":272},{"x":290,"y":272},{"x":240,"y":270},{"x":77,"y":268},{"x":291,"y":268},{"x":660,"y":268},{"x":173,"y":266},{"x":723,"y":264},{"x":620,"y":264},{"x":170,"y":264},{"x":623,"y":262},{"x":455,"y":262},{"x":489,"y":260},{"x":738,"y":258},{"x":411,"y":256},{"x":715,"y":250},{"x":236,"y":248},{"x":790,"y":248},{"x":543,"y":246},{"x":416,"y":242},{"x":218,"y":242},{"x":331,"y":242},{"x":557,"y":240},{"x":319,"y":240},{"x":737,"y":240},{"x":372,"y":240},{"x":28,"y":238},{"x":577,"y":236},{"x":785,"y":236},{"x":517,"y":234},{"x":543,"y":234},{"x":471,"y":234},{"x":625,"y":232},{"x":558,"y":230},{"x":193,"y":230},{"x":408,"y":228},{"x":793,"y":226},{"x":749,"y":224},{"x":92,"y":224},{"x":503,"y":224},{"x":3,"y":220},{"x":95,"y":220},{"x":173,"y":218},{"x":519,"y":218},{"x":649,"y":218},{"x":111,"y":216},{"x":448,"y":214},{"x":266,"y":214},{"x":201,"y":212},{"x":388,"y":212},{"x":770,"y":212},{"x":740,"y":210},{"x":282,"y":210},{"x":308,"y":208},{"x":672,"y":208},{"x":244,"y":208},{"x":34,"y":208},{"x":74,"y":206},{"x":363,"y":206},{"x":63,"y":204},{"x":395,"y":204},{"x":424,"y":202},{"x":397,"y":202},{"x":513,"y":200},{"x":548,"y":200},{"x":58,"y":198},{"x":371,"y":194},{"x":147,"y":190},{"x":671,"y":190},{"x":561,"y":188},{"x":193,"y":186},{"x":550,"y":184},{"x":222,"y":182},{"x":532,"y":182},{"x":422,"y":182},{"x":529,"y":182},{"x":356,"y":180},{"x":431,"y":178},{"x":399,"y":176},{"x":361,"y":176},{"x":592,"y":174},{"x":268,"y":172},{"x":431,"y":172},{"x":234,"y":168},{"x":637,"y":160},{"x":525,"y":158},{"x":628,"y":156},{"x":782,"y":156},{"x":503,"y":156},{"x":411,"y":154},{"x":160,"y":154},{"x":639,"y":152},{"x":599,"y":150},{"x":344,"y":140},{"x":558,"y":138},{"x":343,"y":138},{"x":573,"y":136},{"x":23,"y":134},{"x":58,"y":134},{"x":37,"y":134},{"x":396,"y":130},{"x":510,"y":128},{"x":385,"y":128},{"x":350,"y":126},{"x":698,"y":126},{"x":120,"y":126},{"x":440,"y":122},{"x":265,"y":122},{"x":287,"y":120},{"x":203,"y":120},{"x":86,"y":118},{"x":647,"y":116},{"x":776,"y":114},{"x":654,"y":114},{"x":257,"y":114},{"x":495,"y":112},{"x":497,"y":112},{"x":238,"y":110},{"x":693,"y":110},{"x":233,"y":108},{"x":728,"y":108},{"x":647,"y":108},{"x":51,"y":106},{"x":466,"y":106},{"x":725,"y":104},{"x":208,"y":104},{"x":212,"y":100},{"x":561,"y":100},{"x":693,"y":98},{"x":350,"y":96},{"x":352,"y":96},{"x":770,"y":96},{"x":163,"y":92},{"x":62,"y":88},{"x":436,"y":86},{"x":574,"y":82},{"x":407,"y":80},{"x":545,"y":80},{"x":154,"y":80},{"x":397,"y":78},{"x":386,"y":78},{"x":441,"y":76},{"x":319,"y":76},{"x":172,"y":76},{"x":81,"y":74},{"x":530,"y":74},{"x":151,"y":72},{"x":68,"y":72},{"x":114,"y":70},{"x":705,"y":70},{"x":661,"y":70},{"x":46,"y":68},{"x":1,"y":64},{"x":297,"y":64},{"x":729,"y":64},{"x":715,"y":64},{"x":164,"y":62},{"x":429,"y":62},{"x":27,"y":62},{"x":122,"y":60},{"x":397,"y":60},{"x":26,"y":50},{"x":767,"y":50},{"x":142,"y":48},{"x":127,"y":44},{"x":313,"y":44},{"x":454,"y":42},{"x":342,"y":42},{"x":123,"y":40},{"x":684,"y":38},{"x":352,"y":38},{"x":7,"y":38},{"x":62,"y":38},{"x":428,"y":36},{"x":571,"y":32},{"x":53,"y":30},{"x":657,"y":28},{"x":559,"y":28},{"x":346,"y":28},{"x":331,"y":26},{"x":124,"y":24},{"x":132,"y":22},{"x":132,"y":22},{"x":434,"y":22},{"x":511,"y":18},{"x":89,"y":0}];
    shotsBlue        = [];
    assets           = {};
    enemies          = [ ];
    enemiesPossible  = true;
    enemiesSpawnRate = 250;

    assets['ship']          = loadImage('./assets/ship.png');
    assets['shield']        = loadImage('./assets/shield.png');
    assets['shot_blue']     = loadImage('./assets/shot_blue.png');
    assets['enemy']         = loadImage('./assets/enemy.png');
    assets['enemy_explode'] = loadImage('./assets/enemy_explode.png');

    assets['boom']                = loadSound('./assets/boom.mp3');
    assets['pew']                 = loadSound('./assets/pew.mp3');
    assets['loose']               = loadSound('./assets/loose.mp3');
    assets['atomic-blast']        = loadSound('./assets/atomic-blast.mp3');
    assets['baembaem']            = loadSound('./assets/baembaem.mp3');
    assets['multi-plosion']       = loadSound('./assets/multi-plosion.mp3');
    assets['tschi-tschi-tsching'] = loadSound('./assets/tschi-tschi-tsching.mp3');
    assets['whoop']               = loadSound('./assets/whoop.mp3');
    assets['boom'].setVolume(0.05);
    assets['pew'].setVolume(0.05);
    assets['loose'].setVolume(0.05);
    assets['atomic-blast'].setVolume(0.05);
    assets['baembaem'].setVolume(0.05);
    assets['multi-plosion'].setVolume(0.05);
    assets['tschi-tschi-tsching'].setVolume(0.05);
    assets['whoop'].setVolume(0.05);

    screen   = {};
    screen.w = 800;
    screen.h = 960;

    ship              = {};
    ship.i            = assets['ship'];
    ship.x            = 360;
    ship.y            = 840;
    ship.w            = 64;
    ship.h            = 80;
    ship.dx           = 0;
    ship.dy           = 0;
    ship.speed        = 12;
    ship.fire         = false;
    ship.firePossible = true;
    ship.pewPossible  = true;
    ship.power        = 0;
    ship.points       = 0;
    ship.life         = 100;
}

function setup() {
    createCanvas(screen.w, screen.h);
}

function draw() {
    background(0);
    starsMove();

    if (ship.life <= 0 || start === true) {
        healthBarShow();
        pointsShow();
        PowerUpShow();
        gameStartDraw();
        return;
    }

    shotsBlueMove();
    shipMove();
    enemiesMove();
    healthBarShow();
    pointsShow();
    PowerUpShow();
}

function gameStartDraw() {
    image(assets['ship'], screen.w / 4, screen.h / 4, screen.w / 2, screen.h / 2);
    push();
    textSize(48);
    fill(244, 65, 65);
    text('Press Enter to Start the Game!', (screen.w / 2) - 332, screen.h * 0.8);
    pop();
    push();
    textSize(16);
    fill(244, 65, 65);
    text('Start: ENTER', screen.w - 250, screen.h - 112);
    text('Shoot: SPACE', screen.w - 250, screen.h - 96);
    text('Special: B', screen.w - 250, screen.h - 80);
    text('Turn left: ARROW LEFT', screen.w - 250, screen.h - 64);
    text('Turn right: ARROW RIGHT', screen.w - 250, screen.h - 48);
    text('Development: dazedhead', screen.w - 250, screen.h - 32);
    text('Sound Design: Thorsten Eckel', screen.w - 250, screen.h - 16);
    pop();
    push();
    textSize(60);
    fill(66, 134, 244);
    text('BLUE STAR', screen.w * 0.30, 100);
    text('SPACESHIP', screen.w * 0.30, 175);
    image(assets['shot_blue'], screen.w * 0.48, 190, 48, 48);
    pop();
}

function keyPressed(Event) {
    Event.preventDefault();

    switch (keyCode) {
        case LEFT_ARROW:
            ship.dx = -1;
        break;
        case RIGHT_ARROW:
            ship.dx = 1;
        break;
        case 32: // SPACE
            ship.fire = true;
        break;
        case 66: // B POWERUP
            shotsPowerUp();
        break;
        case 13:
            setup_game();
            start = false;
        break;
        case 27: // ESCAPE
            window.close();
        break;
    }
}

function keyReleased(Event) {
    Event.preventDefault();

    switch (keyCode) {
        case LEFT_ARROW:
            if ( ship.dx != -1 ) break;
            ship.dx = 0;
        break;
        case RIGHT_ARROW:
            if ( ship.dx != 1 ) break;
            ship.dx = 0;
        break;
        case 32: // SPACE
            ship.fire = false;
        break;
    }
}

function shipMove() {
    image(ship.i, ship.x, ship.y, ship.w, ship.h);
    if ( ship.life > 50 ) {
        image(assets['shield'], ship.x, ship.y, ship.w, ship.h);
    }

    if ( ship.x + ship.w + ship.speed < screen.w && ship.dx == 1 ) {
        ship.x += ship.dx * ship.speed;
    }
    if ( ship.x - ship.speed > 0 && ship.dx == -1 ) {
        ship.x += ship.dx * ship.speed;
    }
}

function starsMove() {

    for (var i = 0; i < parseInt(random(5)); i++) {
        star   = {}
        star.x = parseInt(random(screen.w));
        star.y = 0;

        stars.push(star);
    }

    for (var i = 0; i < stars.length - 1; i++) {
        var star = stars[i];

        push();
        stroke(255);
        point(star.x, star.y);
        pop();

        star.y += 2;
    }

    for (var i = 0; i < stars.length - 1; i++) {
        var star = stars[i];

        if ( star.y <= screen.h ) continue;

        stars.splice(i, 1);
    }
}

function shotsPowerUp() {
    if (ship.power < 100) return;
    ship.power -= 100;

    var randomPowerUp = parseInt(random(1,3));

    if (randomPowerUp == 1) {
        shotsPowerUpCrossfire();
    }
    if (randomPowerUp == 2) {
        shotsPowerUpLaserwall();
    }
}

function shotsPowerUpCrossfire() {
    for (var count = 0; count < 50; count++) {

        for (var loopDx = -1; loopDx <= 1; loopDx += 1) {

            for (var loopDy = -1; loopDy <= 1; loopDy += 1) {
                if (loopDx == 0 && loopDy == 0) continue;

                // top
                setTimeout(function(loopDx, loopDy) {
                    var shot = {};
                    shot.w   = 16;
                    shot.h   = 16;
                    shot.x   = ship.x + ( ship.w / 2 ) - (shot.w / 2);
                    shot.y   = ship.y + shot.h;
                    shot.dx  = loopDx;
                    shot.dy  = loopDy;

                    shotsBlue.push(shot);
                }, 100 + (count * 100), loopDx, loopDy );
            }
        }
    }

    assets['tschi-tschi-tsching'].play();
}

function shotsPowerUpLaserwall() {
    for (var lx = 0; lx < screen.w; lx += 16) {

        var shot = {};
        shot.w = 16;
        shot.h = 16;
        shot.x = lx;
        shot.y = screen.h + shot.h;
        shot.dx  = 0;
        shot.dy  = -1;

        shotsBlue.push(shot);
    }

    assets['tschi-tschi-tsching'].play();
    setTimeout(function() { assets['baembaem'].play(); }, 100);
}

function shotsBlueMove() {

    if (ship.fire && ship.firePossible) {

        var shot = {};
        shot.w   = 24;
        shot.h   = 24;
        shot.x   = ship.x + ( ship.w / 2 ) - (shot.w / 2);
        shot.y   = ship.y - shot.h;
        shot.dx  = 0;
        shot.dy  = -1;

        shotsBlue.push(shot);
        ship.firePossible = false;

        if (ship.pewPossible) {
            ship.pewPossible = false;
            assets['pew'].play();
            setTimeout(function() { ship.pewPossible = true }, 1000);
        }

        setTimeout(function() { ship.firePossible = true }, 96);
    }

    for (var i = 0; i < shotsBlue.length; i++) {
        var shot = shotsBlue[i];

        image(assets['shot_blue'], shot.x, shot.y, shot.w, shot.h);

        if ( shot.dy == 1 ) {
            shot.y += 12;
        }
        if ( shot.dy == -1 ) {
            shot.y -= 12;
        }
        if ( shot.dx == 1 ) {
            shot.x += 12;
        }
        if ( shot.dx == -1 ) {
            shot.x -= 12;
        }
    }

    for (var i = 0; i < shotsBlue.length - 1; i++) {
        var shot = shotsBlue[i];

        if ( shot.y >= 0 && !shot.collision ) continue;

        shotsBlue.splice(i, 1);
    }
}

function enemiesMove() {

    //spawn
    if (enemiesPossible) {

        var enemy       = {};
        enemy.w         = 64;
        enemy.h         = 32;
        enemy.x         = parseInt(random(0, screen.w - enemy.w));
        enemy.y         = 0-enemy.h;
        enemy.collision = false;

        enemies.push(enemy);
        enemiesPossible = false;

        enemiesSpawnRate = lerp(enemiesSpawnRate, 25, 0.02);
        setTimeout(function() { enemiesPossible = true }, enemiesSpawnRate);
    }

    // render
    for (var i = 0; i < enemies.length - 1; i++) {
        var enemy = enemies[i];

        if (enemy.collision) continue;

        if (!enemy.collision) {
            for (var y = 0; y < shotsBlue.length - 1; y++) {
                var shot = shotsBlue[y];

                if (shot.collision) continue;

                if (shot.x < enemy.x + enemy.w &&
                   shot.x + shot.w > enemy.x &&
                   shot.y < enemy.y + enemy.h &&
                   shot.h + shot.y > enemy.y) {
                    ship.points    += 120;
                    shipPowerIncrease();
                    enemy.collision = true;
                    shot.collision = true;
                    assets['boom'].play();
                    break;
                }
            }

            if (ship.x < enemy.x + enemy.w &&
               ship.x + ship.w > enemy.x &&
               ship.y < enemy.y + enemy.h &&
               ship.h + ship.y > enemy.y) {
                enemy.collision = true;
                ship.life      -= 50;
                assets['loose'].play();
                break;
            }
        }


        var image_asset = 'enemy';
        if (enemy.collision) {
            image_asset = 'enemy_explode';
        }

        image(assets[image_asset], enemy.x, enemy.y, enemy.w, enemy.h);

        enemy.y += 4;
    }

    // cleanup
    for (var i = 0; i < enemies.length - 1; i++) {
        var enemy = enemies[i];

        if ( enemy.y <= screen.h || enemy.collision ) continue;

        enemyRemove(i, 1);
    }

}

function healthBarShow() {
    push();
    fill(113, 244, 66);
    textSize(16);
    text('Health: ' + ship.life, 10, screen.h - 16);
    pop();
}

function pointsShow() {
    push();
    fill(113, 244, 66);
    textSize(16);
    text('Points: ' + ship.points, 100, screen.h - 16);
    pop();
}

function PowerUpShow() {
    push();
    fill(113, 244, 66);
    textSize(16);
    text('POWER: ' + ship.power, 300, screen.h - 16);
    pop();
}


function enemyRemove(index) {
    enemies.splice(index, 1);
}

function shipPowerIncrease() {
    ship.power += 1;
    if (ship.power % 100 == 0) {
        assets['whoop'].play();
    }
}
