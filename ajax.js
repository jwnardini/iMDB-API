$.getJSON(
  "ajax.json",
  function(data){
      var dieHard = data[0].name;
      var dieHardHero = data[0].actors.hero;
      var dieHardVillain = data[0].actors.villain;
      var dieHardDirector = data[0].director;


      var lethalWeapon = data[1].name;
      var lethalWeaponHeroOne = data[1].actors.heroes.main;
      var lethalWeaponHeroTwo = data[1].actors.heroes.secondary;
      var lethalWeaponVillain = data[1].actors.villain;
      var lethalWeaponDirector = data[1].director;

      $(".movie-list").append(dieHard + ' starring ' + dieHardHero + ' and ' + dieHardVillain + '. Directed by ' + dieHardDirector + '<br>');

      $(".movie-list").append(lethalWeapon + ' starring ' + lethalWeaponHeroOne + ', ' + lethalWeaponHeroTwo + ' and ' + lethalWeaponVillain + '. Directed by ' + lethalWeaponDirector);
});
