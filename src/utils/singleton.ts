export default class Singleton {

  static myInstance: Singleton = null;

  dbManager: IObj = null;

  /**
   * If the instance currently exist is returned otherwise create a new one
   * @returns { Singleton }
   */
  static getInstance(): Singleton {
    if (Singleton.myInstance == null) {
      Singleton.myInstance = new Singleton();
    }
    return this.myInstance;
  }
}
