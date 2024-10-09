/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  var strSplit = str.split(" ");
  var longestWordLength = 0;
  var longestWord = "";
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWordLength) {
      longestWordLength = strSplit[i].length;
      longestWord = strSplit[i];
    }
  }
  return longestWord;
}
console.assert(longest(
  "Hundur api fíll") === "Hundur", "longest skilar 'hundur'");

function shortest(str) {
  var strSplit = str.split(" ");
  var shortestWord = "";
  var shortestWordLength = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length < shortestWordLength) {
      shortestWordLength = strSplit[i].length;
      shortestWord = strSplit[i];
    }
  }
  return shortestWord;
}
console.assert(shortest("Hundur api köttur") === "api", "shortest skilar 'Hundur");

function reverse(str) {
  const split = str.split("");

  const reversed = split.reverse();
  return reversed.join("");
}
console.assert(reverse("halló") === "óllah", "reverse");
console.assert(
  reverse(false === null, "reverse: ef ekki strengur, skila null")
);

function palindrome(str) {
  const lengd = str.length;
  const midja = Math.floor(lengd / 2);

  const fyrriHluti = str.slice(0, midja).split("");
  const seinniHluti = str
    .slice(lengd % 2 === 0 ? midja : midja + 1)
    .split("")
    .reverse();
  return fyrriHluti.join("") === seinniHluti.join("");
}
console.assert(palindrome("racecar") === "racecar", "palindrome");

function vowels(str) {
  const teljari = str.match(/[aeiouyáéýúíóöæAEIOUYÁÉÝÚÍÓ0Æ]/g);
  return teljari ? teljari.length : 0;
}
console.assert(vowels("Hello, world == 3"), "vowels");
console.assert();
function consonants(str) {
  const teljari = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWYZ]/g);
  return teljari ? teljari.length : 0;
}
console.assert(consonants("Hello, world == 7"), "consonants");

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert("Þetta er forrit sem les inn streng og notar nokkrar breytur");
  let haldaAfram = true;
  while (haldaAfram) {
    const inntak = prompt(
      "Sláðu inn streng, hann er síðan keyrður í gegnum forritið"
    );

    if (inntak.trim() === "" || inntak === null) {
      alert("Vitlaus strengur");
      continue;
    }

    if (isString(inntak)) {
      const lengstaOrd = longest(inntak);
      const shortestOrd = shortest(inntak);
      const strReverse = reverse(inntak);
      const strPalindrome = palindrome(inntak);
      const vowelsTeljari = vowels(inntak);
      const consonantsTeljari = consonants(inntak);

      console.log(`Þetta er greining á strengnum: ${inntak}`);
      console.log(`Lengsta orðið á streng: ${lengstaOrd}`);
      console.log(`Styðsta orðið í streng: ${shortestOrd}`);
      console.log(`Skrifa streng aftur á bak: ${strReverse}`);
      console.log(`Strengur er samhverfur ${strPalindrome}`);
      console.log(`Fjöldi sérhljóða í streng: ${vowelsTeljari}`);
      console.log(`Fjöldi samhljóða í streng: ${consonantsTeljari}`);
    } else {
      console.log("Rangur innsláttur");
    }
  }
}
start();
