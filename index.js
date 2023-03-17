// // Code your solution in this file!
// function distanceFromHqInBlocks(street) {
//     const hqStreet = 42;
//     return Math.abs(hqStreet - street);
// }
// console.log(distanceFromHqInBlocks(43));

// //function to calculate the distance from the headquarters in feet
// function distanceFromHqInFeet(street) {
//     const blockLength = 264;//one block is 264 ft long
//     const distanceInBlock = distanceFromHqInBlocks(street);//calculates the distance in block
//     return distanceInBlock * blockLength;//converts distance to feet
// }
// console.log(distanceFromHqInFeet(43));

// //
// // function distanceTravelledInFeet(start, destination) {
// //     const blockLength = 264; // one block is 264 feet long
// //     const distanceInBlocks = Math.abs(end - start); // calculate distance in blocks
// //     let distanceInFeet;

// //     if (distanceInBlocks <= 1) {
// //         distanceInFeet = distanceInBlocks * blockLength; // if the distance is less than or equal to 1 block, calculate distance in feet directly
// //     } else if (distanceInBlocks > 1 && distanceInBlocks <= 4) {
// //         distanceInFeet = blockLength * 2 + (distanceInBlocks - 2) * 264; // if the distance is between 2 and 4 blocks, add additional 2 blocks worth of feet and calculate the rest
// //     } else {
// //         distanceInFeet = blockLength * 2 + blockLength * 3 + (distanceInBlocks - 5) * 264; // if the distance is greater than 4 blocks, add the additional 2 blocks and the 3 blocks worth of feet and calculate the rest
// //     }
// // }
// // console.log(distanceTravelledInFeet(34, 38));

// function calculatesFarePrice(start, destination) {
//     const distance = distanceTravelledInFeet(start, destination);
    
//     if (distance <= 400) {
//       return 0;
//     } else if (distance > 400 && distance <= 2000) {
//       return (distance - 400) * 0.02;
//     } else if (distance > 2000 && distance <= 2500) {
//       return 25;
//     } else {
//       return 'cannot travel that far';
//     }
//   }
//   console.log(calculatesFarePrice(43, 44));

function distanceFromHqInBlocks(block) {
    const hqBlock = 42;
    return Math.abs(block - hqBlock);
  }
console.log(distanceFromHqInBlocks(43));
  
function distanceFromHqInFeet(block) {
    const distanceInBlocks = distanceFromHqInBlocks(block);
    return distanceInBlocks * 264;
  }
console.log(distanceFromHqInFeet(43))
  
function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * 264;
  }
console.log(distanceTravelledInFeet(43, 48));

function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
console.log(calculatesFarePrice(43, 44));