////melkadze

//step one
const teamJohnAvg = ((89 + 120 + 103)/3);
const teamMikeAvg = ((116 + 94 + 123)/3);

//step two
if (teamJohnAvg === teamMikeAvg) {
    console.log(`There was a tie. Boo.`);
} else {
    console.log(`We have a winner...`);
    teamJohnAvg > teamMikeAvg ? console.log(`John's team won with an average of ${teamJohnAvg}!!`) : console.log(`Mike's team won with an average of ${teamMikeAvg}!!`); 
}