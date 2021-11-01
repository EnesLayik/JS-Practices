let value;

const firstName = "Enes";
const lastName = "Layık";
const langs = "Java, Python,C++"

value = firstName+lastName;
value = firstName + " " + lastName;

value = "Enes "
value += "Layık"

//Karakter Bulma
value = firstName.length;

//String ekleme
value = firstName.concat(" ",lastName," ","Müh")

//Karakterleri Küçük Harfe Dönüştürme
value = firstName.toLowerCase();

//Karakterleri Küçük Harfe Dönüştürme
value = firstName.toUpperCase();

//Karakterleri Bulma
value = firstName[0];
value = firstName[3];
value = firstName[firstName.length-1];

//İndex Of
value = firstName.indexOf("s");
value = firstName.indexOf("E");

//Char At
value = firstName.charAt(firstName.length-1);

//Split
value = langs.split(",");

//Replace
value = langs.replace("Python","CSS");

//Include
value =langs.includes("Java");
value = langs.includes ("CSS");






console.log(value);