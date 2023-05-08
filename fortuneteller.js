let tellFortune = (numberChildren, partnerName, geoLocation, jobTitle) => {
  let future = `You will be living in ${geoLocation} with ${numberChildren} children, that you made with ${partnerName}, while you worked as a ${jobTitle}`;
  console.log(future);
};

tellFortune(3, "Lazlo", "Bulgaria", "Thrashbro");
tellFortune(1, "Birgitte", "Camden", "DJ");
tellFortune(0, "Bambine", "Firenze", "Babysitter");
