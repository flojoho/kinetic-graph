

export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  minus(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  to(vector) {
    return new Vector(vector.x - this.x, vector.y - this.y);
  }

  magnify(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  }

  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }
}