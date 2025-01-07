// Game stats
const stats = {
  wins: 0,
  ties: 0,
  losses: 0,
  count: {
    rock: 0,
    paper: 0,
    scissors: 0,
  },
};

// Computer choices
const options = ['R', 'P', 'S'];

// Function to play one round
function playRound(playerChoice) {
  // Update choice counts
  if (playerChoice === 'R') stats.count.rock++;
  if (playerChoice === 'P') stats.count.paper++;
  if (playerChoice === 'S') stats.count.scissors++;

  // Random computer choice
  const computerChoice = options[Math.floor(Math.random() * options.length)];

  // Determine the outcome
  let outcome = '';
  if (playerChoice === computerChoice) {
    stats.ties++;
    outcome = "It's a tie!";
  } else if (
    (playerChoice === 'R' && computerChoice === 'S') ||
    (playerChoice === 'P' && computerChoice === 'R') ||
    (playerChoice === 'S' && computerChoice === 'P')
  ) {
    stats.wins++;
    outcome = 'You win!';
  } else {
    stats.losses++;
    outcome = 'You lost!';
  }

  // Update UI
  document.getElementById('player-choice').innerText = `You chose: ${translateChoice(playerChoice)}`;
  document.getElementById('computer-choice').innerText = `Computer chose: ${translateChoice(computerChoice)}`;
  document.getElementById('outcome').innerText = outcome;
  document.getElementById(
    'stats'
  ).innerText = `Wins: ${stats.wins} | Losses: ${stats.losses} | Ties: ${stats.ties}`;
}

// Helper to translate choice letters to full words
function translateChoice(choice) {
  switch (choice) {
    case 'R':
      return 'Rock';
    case 'P':
      return 'Paper';
    case 'S':
      return 'Scissors';
    default:
      return '';
  }
}


function resetGame() {
  // Reset stats
  stats.wins = 0;
  stats.losses = 0;
  stats.ties = 0;
  stats.count.rock = 0;
  stats.count.paper = 0;
  stats.count.scissors = 0;

  // Clear UI
  document.getElementById('player-choice').innerText = '';
  document.getElementById('computer-choice').innerText = '';
  document.getElementById('outcome').innerText = '';
  document.getElementById('stats').innerText = 'Wins: 0 | Losses: 0 | Ties: 0';
}

