/* eslint import/prefer-default-export: 0 */
const apiUrl = 'https://yard.moscow/api/v1/';

export const get = resource => fetch(apiUrl + resource).then(res => res.json());
