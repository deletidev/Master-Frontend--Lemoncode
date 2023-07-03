// # ZZCrypt

// Descifra el siguiente secreto:
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const diccionario = (cipher, plain) => {
  let obj = {};
  for (let i = 0; i < plain.length; i++) {
    obj[cipher[i]] = plain[i];
  }
  return obj;
};

const decrypt = (secret, cipher, plain) => {
  let resuelto = '';
  const diccionariomio = diccionario(cipher, plain);

  for (const iterator of secret) {
    const cambiocart = diccionariomio[iterator] || iterator;
    resuelto += cambiocart;
  }
  return resuelto;
};
console.log(decrypt(secret, cipher, plain));
