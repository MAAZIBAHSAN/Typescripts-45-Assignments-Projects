"use strict";
let guest_list = ['Faraz Ahmed', 'Syed Kashan', 'faizan Ali',];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
//   absent guest are there
let absent_guest = 'Faraz Ahmed';
let new_guest = 'Kamran Khan';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
// console.log(`Mr. ${absent_guest} is not coming to the party.`)
// console.log('Good News! We Find Big Table So We Are Invite 3 More Guests.')
// 3 guest are add in this array 
guest_list.unshift('Sir Zia Khan');
guest_list.splice(2, 0, 'Sir hunain');
guest_list.push('Sir Owais Ali');
// 6 guests array print by this line
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
// sorry message for guests
// console.log('\nSorry we can not arrange big table, only two peoples will be invited.') ;
// removed guests
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    // console.log(`Sorry Mr. ${remove_guest}, you are not invited for dinner`) ;
}
// still 2 invited guest
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nYou are still invited.\n\nThank you!\n\n')
// }
//all guest are remove from array
guest_list.splice(0, 2);
console.log(guest_list);
//  print a message indicating the number of people you are inviting to dinner.
console.log(`total number of guest are: ${guest_list.length}`);
