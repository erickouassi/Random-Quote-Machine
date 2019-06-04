let quoteAuthor=[
	// add new quote here: {copy and paste your quote };
  {
			quote: "I have learned over the years that when one's mind is made up, this diminishes fear.",
			author:"Rosa Parks"
	    },
	    {
	    	quote:"Life is a daring adventure or it is nothing at all.",
	    	author:"Helen Keller"
	    },
	    {
	    	quote:"Nothing is impossible, the word itself says, 'I'm possible!",
	    	author:"Audrey Hepburn"
	    },
	    {
	    	quote:"If you want to lift yourself up, lift up someone else.",
	    	author:"Booker T. Washington"
	    },
	    {
	    	quote:"If there is no struggle, there is no progress.",
	    	author:"Frederick Douglas"
	    },
	    {
	    	quote:"We can't help everyone, but everyone can help someone.",
	    	author:"Ronald Reagan"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	author:"Arthur Ashe"
	    },
	    {
	    	quote:"If you do not tell the truth about yourself you cannot tell it about other people.",
	    	author:"Virgina Wolfe"
	    },
	    {
	    	quote:"Nothing works better than just improving your product.",
	    	author:"Joel Spolsky, cofounder of Stack Overflow"
	    },
	    {
	    	quote:"If you have knowledge, let others light their candles in it.",
	    	author:"Margaret Fuller"
	    },
	    {
	    	quote:"There are two things people want more than sex and money... recognition and praise.",
	    	author:"Mary Kay Ash"
	    },
	    {
	    	quote:"Happiness is not the absence of problems; it's the ability to deal with them.",
	    	author:"Steve Maraboli"
	    },
	    {
	    	quote:"Happiness is not something ready made. It comes from your own actions.",
	    	author:"Dalai Lama"
	    },
	    {
	    	quote:"The best revenge is massive success.",
	    	author:"Frank Sinatra"
	    },
	    {
	    	quote:"If you can dream it, you can achieve it.",
	    	author:"Zig Ziglar"
	    },
	    {
	    	quote:"When I work fourteen hours a day, seven days a week, I get lucky.",
	    	author:"Dr. Armand Hammer "
	    },
	    {
	    	quote:"You miss 100 percent of the shots you don't take.",
	    	author:"Wayne Gretzky"
	    },
	    {
	    	quote:"There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
	    	author:"Colin Powell"
	    },
	    {
	    	quote:"It is amazing what you can accomplish if you do not care who gets the credit.",
	    	author:"Harry S. Truman"
	    },
	    {
	    	quote:"When you find an idea that you just can't stop thinking about, that's probably a good one to pursue",
	    	author:"Josh James"
	    },
	    {
	    	quote:"Always look for the fool in the deal. If you don't find one, it's you.",
	    	author:"Mark Cuban"
	    },
	    {
	    	quote:"The best way to predict the future is to invent it.",
	    	author:"Alan Kay"
	    },
	    {
	    	quote:"No matter what people tell you, words and ideas can change the world.",
	    	author:"Robin Williams"
	    },
	    {
	    	quote:"Once you choose hope, anything's possible.",
	    	author:"Christopher Reeve"
	    },
        {
	    	quote:"Do not let what you cannot do interfere with what you can do.",
	    	author:"John Wooden"
	    },
		{
	    	quote:"There are two educations. One should teach us how to make a living and the other how to live.",
	    	author:"John Adams"
	    },
		{
	    	quote:"I never dreamt of success. I worked for it.",
	    	author:"Estee Lauder"
	    },
		{
	    	quote:"Every child is an artist. The problem is how to remain an artist once he grows up.",
	    	author:"Pablo Picasso"
	    },
		{
	    	quote:"The art of conversation lies in listening.",
	    	author:"Malcom Forbes"
	    }
	];
		
// For New quote
	function randomQuote(){
  let random = quoteAuthor[Math.floor(Math.random() * quoteAuthor.length)];
  text.innerText = `"${random.quote}"`;
  author.innerText = random.author;
    
}	

// For Tweet this quote
function tweetQuote() {
  let generatedQuote = document.getElementById('text').innerHTML;
  let generatedAuthor = document.getElementById('author').innerHTML;
  let tweetThis = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(generatedQuote) + encodeURIComponent(generatedAuthor) + ""; window.open(tweetThis);
}	
