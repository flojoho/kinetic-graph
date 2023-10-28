

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

  plus(vector: Vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
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
  times(scalar: number) {
    return new Vector(scalar * this.x, scalar * this.y);
  }

  rotate(angle: number) {

    const rad = angle/360*(2*Math.PI);
    const sin = Math.sin(rad);
    const cos = Math.cos(rad);

    const x = this.x * cos - this.y * sin;
    const y = this.x * sin + this.y * cos;

    return new Vector(x, y);

    // cos -sin   x  =  x cos - y sin
    // sin cos    y  =  x sin + y cos
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }
}