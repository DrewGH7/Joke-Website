function changeJoke() {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call fake spaghetti? An impasta!",
        "Why did the bicycle fall over? Because it was two-tired!",
        "Why did the math book look sad? Because it had too many problems.",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
        "Why did the coffee file a police report? It got mugged!",
        "Why did the cookie go to the doctor? Because it was feeling crumbly!",
        "Why did the computer go to the doctor? Because it had a virus!",
        "Why did the chicken join a band? Because it had the drumsticks!",
        "Why did the banana go to the doctor? Because it wasn't peeling well!",
        "How do you organize a space party? You planet!",
        "How do you catch a squirrel? Climb a tree and act like a nut!",
        "Can February March? No, but April May!",
        "How does a penguin build its house? Igloos it together!",
        "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.",
        "Why did the invisible man turn down the job offer? He couldn't see himself doing it!",
        "What do you call a parade of rabbits hopping backwards? A receding hare-line!",
        "Why don't some couples go to the gym? Because some relationships don't work out!",
        "I'm on a seafood diet. I see food and I eat it.",
        "What do you call a belt made out of watches? A waist of time!",
        "Why did the stadium get hot after the game? All the fans left!",
        "Why are ghosts such bad liars? Because you can see right through them!",
        "What do you call a snowman with a six pack? An abdominal snowman!",
        "Why did the physics teacher break up with the biology teacher? There was no chemistry.",
        "How does the moon cut his hair? Eclipse it!",
        "Why don't seagulls fly over the bay? Because then they'd be bagels!",
        "What do you call a pony with a sore throat? A little hoarse!",
        "Why did the picture go to jail? Because it was framed!",
        "Why did the developer go broke? Because he used up all his cache!",
        "What do you call a bear with no teeth? A gummy bear!",
        "What’s orange and sounds like a parrot? A carrot!",
        "Why did the belt go to jail? For holding up a pair of pants!",
        "Why can't you give Elsa a balloon? Because she will let it go!",

    ];
    
    const jokeElement = document.getElementById("joke");
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[randomIndex];
}