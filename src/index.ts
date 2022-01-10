import { MatchResult } from './MatchResult';

// Refactor 1
// import { MatchReader } from './refactor1/MatchReader';

// Refactor 2
import { CsvFileReader } from './refactor2/CsvFileReader';
import { MatchReader } from './refactor2/MatchReader';

// Refactor 1
// const reader = new MatchReader('./football.csv');
// reader.read();

// Refactor 2
const csvFileReader = new CsvFileReader('./football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

// Refactor 1
// for (let match of reader.data) {

// Refactor 2
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(manUnitedWins);
