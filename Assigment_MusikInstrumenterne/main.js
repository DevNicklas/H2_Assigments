class Instrument {
    constructor(name) {
        this.name = name;
    }

    // Plays audio if the mp3 is found
    play(sound) {
        try {
            const audio = document.getElementById(sound);
            audio.play();
        } catch (error) {
            console.error(`An error occurred trying to play ${this.name}`, error);
        }
    }
}

class Stringed extends Instrument {
    constructor(name, numberOfStrings) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }
}

class Harp extends Stringed {
    constructor(height) {
        super("Harp", 10);
        this.height = height;
    }
}

class Guitar extends Stringed {
    constructor(material) {
        super("Guitar");
        this.material = material;
    }
}

class Saxophone extends Instrument {
    constructor(material) {
        super("Saxophone");
        this.material = material;
    }
}

class Flute extends Instrument {
    constructor(holes, material) {
        super("Flute");
        this.holes = holes;
        this.material = material;
    }
}

// Initialize instruments after all DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    const harp = new Harp(10);
    const guitar = new Guitar("Wood");
    const saxophone = new Saxophone("Gold");
    const flute = new Flute(8, "Plastic");
});