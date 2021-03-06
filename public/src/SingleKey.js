export default class SingleKey {
    constructor(keyboardEventId, mp3Id, isWhite) {
        let URL = 'https://virtual-piano-app.herokuapp.com/music?id=a';
        this.keyboardEventId = keyboardEventId;
        this.mp3Id = mp3Id;
        this.isWhite = isWhite;
        this.stringPattern = "";
        URL += mp3Id + '.mp3';
        this.URL = URL;
        this.setStringPattern();
    }

    setStringPattern() {
        this.stringPattern = ((this.isWhite) ? "#key-white-" + this.keyboardEventId :
            this.stringPattern = "#key-black-" + this.keyboardEventId);
    }
}
