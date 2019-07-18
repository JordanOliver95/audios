const tf = require('@tensorflow/tfjs');
const speechCommands = require('@tensorflow-models/speech-commands')

const predict = async data => {
tf.tidy(async () => {
    let recognizer = speechCommands.create('BROWSER_FFT');
    await recognizer.ensureModelLoaded();
    const x = tf.tensor4d(data, [1].concat(recognizer.modelInputShape().slice(1)));
    const output = recognizer.recognize(x);
    let scores = { output };
   scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
   scores.sort((s1, s2) => s2.score - s1.score);
   console.log(scores[0].word);
   return scores[0];
  });
}

export default predict