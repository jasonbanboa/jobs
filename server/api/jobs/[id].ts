import data from '../../data.json';

export default defineEventHandler((event) => {
  return data.find(({ id }) => +id === +event.context.params!.id);
});