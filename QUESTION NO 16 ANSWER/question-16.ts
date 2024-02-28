
let guest_list :string[] = ['Faraz Ahmed','Syed Kashan','faizan Ali',];

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }

let absent_guest :string = 'Faraz Ahmed' ;
let new_guest :string = 'Kamran Khan' ;
guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log(`Mr. ${absent_guest} is not coming to the party.`)
console.log('Good News! We Find Big Table So We Are Invite 3 More Guests.')

guest_list.unshift('Sir Zia Khan') ;
guest_list.splice(2 ,0 , 'Sir hunain') ;
guest_list.push('Sir Owais Ali') ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}


