import React, { useState } from 'react';

function App() {
  let [randomThning, setRandomThing] = useState();

  const randomArray = [
    'დარწმუნებული ვარ.',
    'დიახ.',
    'უდაოდ.',
    'შესაძლებელია.',
    'სავარაუდოდ კი.',
    'პასუხის გაცემა მიჭირს, ახლიდან მკითხე.',
    'სჯობს ახლა არ გითხრა.',
    'არა.',
    'არასდროს.',
    'ცუდი იდეაა.',
    'არ გარისკო!',
  ];

  const randomAnswer = () => {
    setRandomThing(
      (randomThning =
        randomArray[Math.floor(Math.random() * randomArray.length)])
    );
    console.log(randomThning);
  };

  return (
    <>
      <div>
        <h1>მკითხე რამე</h1>
        <div>
          <input type='text' placeholder='Ask a question' />
          <button onClick={randomAnswer}>Ask</button>
        </div>
        <p>{randomThning}</p>
      </div>
    </>
  );
}

export default App;
