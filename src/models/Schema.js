export class Schema {
  static toResponse(object) {
    const model = { ...object };
    if (model.password) {
      model.password = undefined
    }
    return model;
  }

  static validation(model) {
    return model;
  }
}