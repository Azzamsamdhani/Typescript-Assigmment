

let Guest_list :string[] = ['Nawaz Sharif','Zardari','Imran Khan',];

for(let i=0; i<Guest_list.length; i++){

     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

let absent_Guest :string = 'Imran Khan' ;

let new_Guest :string = 'Kamran Tessori' ;

Guest_list[0] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

console.log(`Mr ${absent_Guest} is not coming to the part.`)
