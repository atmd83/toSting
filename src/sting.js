Object.prototype.toSting = function () {

    var lyrics = [
        "Dont stand so, dont stand so, dont stand so close to me.",
        "I don't drink coffee, I take tea my dear",
        "I'll be watching you",
        "And ask her if she'll marry me in some old fashioned way",
        "Roxanne, you don't have to put on the red light",
        "I'm an alien, I'm a legal alien",
        "I'll send an s.o.s. to the world",
        "Only hope can keep me together",
        "Oh can't you see?",
        "Message in a bottle, yeah",
        "We'll walk in fields of gold",
        "Even though my life before was tragic",
        "Only hope can keep me together",
        "Put on the red light, put on the red light",
        "Some would say I was a lost man in a lost world",
        "How my poor heart aches",
        "If I ever lose my faith in you, There'd be nothing left for me to do",
        "Everything she do just turns me on",
        "Never saw no military solution"
    ];

    var random = Math.floor(Math.random()*lyrics.length)
    return lyrics[random];
}
