/**
 * Abstract class for db models
 */
export class Schema {
  /**
   * Makes model responseble
   * @param {Object} object Entity 
   * @returns {Object} - Responseble object
   */
  static toResponse(object) {
    const model = { ...object };
    if (model.password) {
      model.password = undefined;
    }
    return model;
  }
}