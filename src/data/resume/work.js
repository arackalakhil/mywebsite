/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'VORTA ENERGY',
    position: 'Co-Founder and Engineer',
    url: 'your_company_website', // Add your company's website link here if applicable
    startDate: '2020-09-01',
    endDate: '2021-10-01',
    summary: 'Vorta Energy, co-founded in September 2020, focuses on creating high-end electric motorcycles. As an engineer and co-founder, I led internal business operations and set the company’s technical strategy. Successfully developed a 55 KW motorcycle with immersion cooling. This role not only honed my technical skills but also provided valuable insights into business operations.',
    highlights: [
      'Founded VORTA ENERGY and played a key role in shaping its vision and direction.',
      'Led internal business operations and defined the company’s technical strategy.',
      'Successfully developed a cutting-edge 55 KW motorcycle with immersion cooling.',
    ],
  },
];

export default work;
