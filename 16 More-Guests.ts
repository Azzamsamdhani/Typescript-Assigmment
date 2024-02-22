

let Guest_list :string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari',];

// for(let i=0; i<Guest_list.length; i++){

//      console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'Imran Khan' ;

let new_Guest :string = 'Kamran Tessori' ;

Guest_list[0] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

console.log(`Mr ${absent_Guest} is not coming to the part.`);

console.log('Good News! we find big Table so are inviting 3 more guests.')

Guest_list.unshift('Sir Zia khan') ;
Guest_list.splice(2 , 0 , 'Maryum Nawaz');
Guest_list.push('Bilwal Bhutto');

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}