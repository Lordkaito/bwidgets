// we need to import fielddata too

let fieldData: any;

const blacklisted = (name: string) => {
  let username = name.toLowerCase().trim();
  let blacklist: Array<string> = [];
  let blackListFieldData = fieldData.usersBlackList.split(",");
  blackListFieldData.forEach((nick: string) => {
    blacklist.push(nick.toLowerCase().trim());
  });
  return blacklist.includes(username);
};

export default blacklisted;
