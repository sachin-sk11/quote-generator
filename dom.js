const quote= document.querySelector('.text-area');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');

const quotes =[
{
   quote:"“You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.”",
   author : "- Vasudeva"
},
{
    quote:"“In the dark night of all beings awakes to Light the tranquil man. But what is day to other beings is night for the sage who sees.”",
    author : "- Kanha"
},
{
    quote:"“There are three gates leading to the hell of self-destruction for the soul—lust, anger, and greed. Therefore, one should abandon all three.”",
    author: "- Keshava"
},
{
    quote:"“When consciousness is unified, however, all vain anxiety is left behind. There is no cause for worry, whether things go well or ill.”",
    author :"- Govinda"
},
{
    quote:"“Happiness is a state of mind and has nothing to do with the external world.”",
    author:"- Devakinandana"
},
{
    quote:"“Cultivate vigour, patience, will, purity; avoid malice and pride.”",
    author:"- Gopal"
},
{
    quote:"“The struggle for self-mastery that every human being must wage if he or she is to emerge from life victorious.”",
    author:"- Giridhar"
},
{
    quote:"“We behold what we are, and we are what we behold.”",
    author:"- Murari"
},
{
    quote:"Change is the law of the universe. You can be a millionaire, or a pauper in an instant",
    author:"- Jagannath"
},
{
    quote:"“It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.”",
    author:"- Yashoda Nandan"
},

];

btn.addEventListener('click',newquote);

function newquote(){
    let random =Math.floor(Math.random()*quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
}