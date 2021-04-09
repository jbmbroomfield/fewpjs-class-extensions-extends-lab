class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    
    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((prev,curr) => prev + curr)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides.length !== 3) {
            return false
        } else {
            for (const side of this.sides) {
                if (side * 2 > this.perimeter) {
                    return false
                }
            }
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides.length !== 4) {
            return false
        } else {
            return !!this.sides.reduce((prev,curr) => prev === curr && prev !== false ? prev : false)
        }
    }

    get area() {
        return this.sides[0] ** 2
    }
}