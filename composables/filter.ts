
export const useFilter = () => useState('filter', () => ({
  byTitleOrCompany: '',
  byLocation: '',
  byContract: '',
}));