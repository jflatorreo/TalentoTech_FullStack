class Document {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}

class Report extends Document {
    constructor() {
        super('Report');
    }
}

class Letter extends Document {
    constructor() {
        super('Letter');
    }
}

class DocumentFactory {
    createDocument(type) {
        switch (type) {
            case 'Report':
                return new Report();
            case 'Letter':
                return new Letter();
            default:
                throw new Error('Tipo de documento desconocido');
        }
    }
}

// Uso del Factory Method
const factory = new DocumentFactory();

const report = factory.createDocument('Report');
console.log(report.getType());  // Output: Report

const letter = factory.createDocument('Letter');
console.log(letter.getType());  // Output: Letter
