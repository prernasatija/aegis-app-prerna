'use strict'

/**
 * @type {import('./index').ModelSpecification}
 */
export const TestEndpoint = {
  modelName: 'testendpoint',
  endpoint: 'testendpoints',
  factory: dependencies => ({
    name,
    value,
    desc
  }) => Object.freeze({ name, value, desc })
}

