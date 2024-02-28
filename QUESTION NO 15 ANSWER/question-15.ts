

let guest_list :string[] = ['Faraz','Kashan','faizan',];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

let absent_guest :string = 'Faraz' ;

let new_guest :string = 'Kamran' ;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

console.log(`Mr. ${absent_guest} is not coming to the party.`)
