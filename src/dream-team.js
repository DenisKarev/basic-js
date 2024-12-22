const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const abbr = [];
  if (members instanceof Array) {
    members.forEach((member) => {
      if (member && typeof member === 'string') {
        if (member.trim().toUpperCase().match(/[A-Z]/)) {
          abbr.push(member.trim().toUpperCase().charAt(0));
        }
      }
    })
    return abbr.sort().join('');
  } else return false;
}

console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']));
console.log(createDreamTeam({ 0: 'Matt', 1: 'Ann', 2: 'Dmitry', 3: 'Max' }));
module.exports = {
  createDreamTeam
};
