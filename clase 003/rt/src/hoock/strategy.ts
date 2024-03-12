import { Character } from "../type/Fetch"

interface SerchStrategy {
    applySerch(Character:Character[]): Character[]
}

export class NoSerch implements SerchStrategy {
    public applySerch(Character:Character[]): Character[] {
        return Character
    }
}

export class SerchGender implements SerchStrategy {
    private  gender: string
    constructor(gender: string) {
        this.gender = gender
    }

    applySerch(Characters: Character[]):  Character[] {
        const CharacterSerch = Characters.filter((charact)=>charact.gender === this.gender)
       return CharacterSerch
    } 
}

export class SerchProcessor {
    private serchStrategy: SerchStrategy = new NoSerch()

    setSerchStrategy(strategy:SerchStrategy): void {
        this.serchStrategy = strategy
    }

    processSerch(Characters: Character[]): Character[] {
        return this.serchStrategy.applySerch(Characters)
    }
}
