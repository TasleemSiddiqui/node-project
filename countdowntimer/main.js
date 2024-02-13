const endTime = new Date();
endTime.setSeconds(endTime.getSeconds() + 30); // set the end time to be 30 seconds from now
while (new Date().getTime() < endTime.getTime()) {
    const remainingSeconds = Math.floor((endTime.getTime() - new Date().getTime()) / 1000);
    console.log(`Countdown: ${remainingSeconds} seconds remaining`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // pause for 1 second
}
console.log("Time's up!");
export {};
