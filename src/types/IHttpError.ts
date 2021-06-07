/** 
 * Interface for classes that represent http errors.
 * 
 * @interface
 */

export interface IHttpError extends Error {
  status?: number;
}