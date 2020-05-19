export default abstract class Comparable<T extends Comparable<T>>{
    /**
     * return a unique number for this object.
     */
    public abstract hashCode(): number;

    /**
     * 
     * @param a the object to compare to
     */
    public compareTo(a: T): number {
        return this.hashCode()-a.hashCode();
    }
    public compareToHash(a: number): number{
        return this.hashCode()-a;
    }
    public equals(a: T): boolean{
        return this.hashCode()==a.hashCode();
    }
}