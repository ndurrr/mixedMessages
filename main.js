// array of fortune messages (first part)

const message = ['Don’t wait for success… Go and find it!', 
'Don’t worry about what others think of you', 
'Face the truth with dignity', 
'To be idle is to be foolish',
'You will do well to advance your career',
'Stop letting other people stand in your way',
'True love is on its way. Make room!',
'Learn how to do something new today',
'Fame and fortune lie ahead',
'Learn from your mistakes. Try not to make them again',
'You have good reason to be self-confident',
'Happiness may be right under your nose',
'Respect your elders, they have endured many more struggles than you may ever know',
'Work first, but make sure to play later',
'Anxiety won’t help your problems'];

// fortune picks a random number between 1 and 1000. This is the user's "lucky number"

const luckyNumber = () => {
    return Math.floor(Math.random() * 1000);
}


const fortune = () => {
    
    // pick a random number based on the input array
    const getRandNum = array => {
        return Math.floor(Math.random() * array.length);
    }

    let advice = message[getRandNum(message)];

    // put it all together

    let fullString = `${advice}`;

    console.log(fullString);
    console.log(`Your lucky number is: ${luckyNumber()}`);
};

fortune();