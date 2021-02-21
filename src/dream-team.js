module.exports = function createDreamTeam(members) {
  let result = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) === "string") {
        members[i] = members[i].trim();
        result.push(members[i][0].toUpperCase());
      }
    }
    return result.sort().join('');
  } else return false;
};