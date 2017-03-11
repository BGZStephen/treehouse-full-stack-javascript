var expect = require(`chai`).expect;

function titleCase (title) {
  var words = title.split(` `)
  var titleCasedWords = words.map(function(word) {
    return word[0].toUpperCase() + word.substring(1);
  });

  return titleCasedWords.join(` `)

}

expect(titleCase(`the great mouse detecive`)).to.be.a(`string`);
expect(titleCase(`t`)).to.equal(`T`)
expect(titleCase(`the`)).to.equal(`The`)
expect(titleCase(`the great mouse detective`)).to.equal(`The Great Mouse Detective`)
