import data from '../data.json';

const formatData = ({
  id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}: JobPosting): Partial<JobPosting> => {
  return {
    id,
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
  };
};

export default defineEventHandler(() => {
  return data.map(formatData);
});
