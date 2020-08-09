import { SentimentAnalyzer, PorterStemmer } from 'natural'

// !!! make function to load model and if not train then load

// async function basicTraining() {
// 	// Adds the utterances and intents for the NLP
// 	manager.addDocument('en', 'goodbye for now', 'greetings.bye');
// 	manager.addDocument('en', 'bye bye take care', 'greetings.bye');
// 	manager.addDocument('en', 'okay see you later', 'greetings.bye');
// 	manager.addDocument('en', 'bye for now', 'greetings.bye');
// 	manager.addDocument('en', 'i must go', 'greetings.bye');
// 	manager.addDocument('en', 'hello', 'greetings.hello');
// 	manager.addDocument('en', 'hi', 'greetings.hello');
// 	manager.addDocument('en', 'howdy', 'greetings.hello');
	
// 	// Train also the NLG
// 	manager.addAnswer('en', 'greetings.bye', 'Till next time');
// 	manager.addAnswer('en', 'greetings.bye', 'see you soon!');
// 	manager.addAnswer('en', 'greetings.hello', 'Hey there!');
// 	manager.addAnswer('en', 'greetings.hello', 'Greetings!');

// 	//negative utterances
// 	manager.addDocument('en', 'I hate this', 'negative');
// 	manager.addDocument('en', 'This is the worst', 'negative');
// 	manager.addDocument('en', 'Bad', 'negative');
// 	manager.addDocument('en', 'Fake', 'negative');

// 	await manager.train();
// 	const data = manager.export(true);
// 	manager.save("basicTraining.nlp");

// 	return filename
// }

// function readNames(filename) {
	
// }

// async function train(filename = "nameModel.nlp") {
// 	manager.addNamedEntityText(
// 		'hero',
// 		'spiderman',
// 		['en'],
// 		['Spiderman', 'Spider-man'],
// 	);
		
// 	await manager.train();
// 	const data = manager.export(true);
// 	manager.save(filename);

// 	return filename
// }