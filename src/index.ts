import { Summary } from './Summary';

// Refactor 1
// import { MatchReader } from './refactor1/MatchReader';

// Refactor 2
import { MatchReader } from './refactor2/MatchReader';

// Refactor 1
// const reader = new MatchReader('./football.csv');
// reader.read();

// Refactor 2
const matchReader = MatchReader.fromCsv('./football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Chelsea');

summary.buildAndPrintReport(matchReader.matches);
