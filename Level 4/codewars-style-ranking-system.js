class User {
    constructor() {
        this.rank = -8
        this.progress = 0
    }
    incProgress(lev) {
        if (lev === 9 || lev === -9 || lev === 0) throw "Invalid Levels"
        let diff = lev - this.rank
        if (lev > 0 && this.rank < 0) diff--
        if (lev < 0 && this.rank > 0) diff++
        if (diff > 0) {
            this.progress += 10 * diff * diff
        } else if (diff === 0) {
            this.progress += 3
        } else if (diff === -1) {
            this.progress += 1
        }

        while (this.progress >= 100) {
            this.rank++
            this.progress = this.progress - 100
            if (this.rank === 0) {
                this.rank++
            }
        }

        if (this.rank >= 8) {
            this.rank = 8
            this.progress = 0
        }
    }
}