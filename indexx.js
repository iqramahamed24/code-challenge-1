//Call function calculateDemeritPoint and give it a parameter of speed
function calculateDemeritPoint(speed) {
    //assign values to to speed limit,demerit points and maximum demerit points
    let speedLimit = 70;
    let demeritPointPerKm = 5;
    let maxDemeritPoint = 12;


    //check if the speed is less than speed limit
    if (speed < speedLimit) {
        console.log('OK'); // should log ok if the speed is less than the limit 
        return 0; // return 0 demerit points
    }
// determine the demerit points if the speedlimit is exceeded
    const demeritPoints =( speed - speedLimit) / demeritPointPerKm;
    console.log('Points:', demeritPoints); //should log the demerit points
// check if the the demerits are more than the maximum points allowed 
    if (demeritPoints >= maxDemeritPoint) {
        return("License suspended") // should log licence suspended if the demerit points exceeded the maximum
    }
// return the demerit points
  return demeritPoints;
}
let speed = 85
calculateDemeritPoint(speed)