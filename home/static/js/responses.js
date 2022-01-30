function getBotResponse(input) {
    //rock paper scissors
    if (input == "Who are you ?") {
        return "I am Clg360 chatbot";
    } else if (input == "What are the top engineering colleges in Mumbai ?") {
        return "IIT Bombay, Institute of Chemical Technology, S.P.I.T.";
    } else if (input == "How is the infrastructure of IIT Bombay ?") {
        return "Students have the freedom to roam anywhere on the campus, and can use a Wi-Fi facility anywhere in the college. Superb quality food is served to eat, and icecreams are also provided. High level medicines are offered to students for free. Placements: IIT Bombay is a nice college to study in.";
    } else if (input == "Which is top law college in India ?") {
        return "National Law School of India University";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}