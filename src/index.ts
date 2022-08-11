import crypto from 'crypto';

interface BlockShape {
  hesh: string;
  prevHesh: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hesh: string;
  constructor(
    public prevHesh: string,
    public hegiht: number,
    public data: string
  ) {
    this.hesh = Block.calculateHesh(prevHesh, hegiht, data);
  }
  static calculateHesh(prevHesh: string, hegiht: number, data: string) {
    const toHesh = `${prevHesh}${hegiht}${data}`;
  }
}
