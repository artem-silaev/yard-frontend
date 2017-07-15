/* eslint import/prefer-default-export: 0*/
// TODO: remove this rule when there will be new methods
const apiUrl = 'https://yard.moscow/api/v1/';

export const get = resource => fetch(apiUrl + encodeURI(resource)).then(res => res.json());
