let value;

const value1 = 30;
const value2 = 20;

//Dört işlem ve Sabit Sayılar Metodu
value = value1+value2;
value = value1-value2;
value = value1*value2;
value = value1/value2;
value = value1%value2;
value = Math.PI;
value = Math.E;

//Yuvarlama Metodu "round"
value = Math.round(5.2);
value = Math.round (3.8);

//Yukarı Tam Sayıya Yuvarlama Metodu "ceil"
value = Math.ceil(3.2);
value = Math.ceil(5.4);

//Aşağı Tam Sayıya Yuvarlama Metodu "floot"
value = Math.floor(1.2)
value =Math.floor(5.9)

//Karekök Alma
value = Math.sqrt(16);
value = Math.sqrt(24);

//Mutlak Değere Alma
value = Math.abs(-27);

//Üst Alma
value = Math.pow(6,3);
value = Math.pow(4,3);

//Sayılar Arasında En Büyük ve En Küçük Sayı Bulma
value =Math.max(4,27,13,15);
value =Math.min(4,27,13,15,2.8);

//Random Sayı Atama
value = Math.random();
value = Math.floor (Math.random()*13+1);



console.log(value);