

export default class Vector {
  x: number;
  y: number
  
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(vector: Vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  subtract(vector: Vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  minus(vector: Vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  to(vector: Vector) {
    return new Vector(vector.x - this.x, vector.y - this.y);
  }

  magnify(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
  }

  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }
}