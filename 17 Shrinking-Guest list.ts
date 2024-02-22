
let Guest_list :string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari',];
// for(let i=0; i<Guest_list.length; i++){
//      console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Kamran Tessori' ;
Guest_list[0] = new_Guest ;

// for(let i=0; i<Guest_list.length; i++){
//      console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

console.log(`Mr ${absent_Guest} is not coming to the part.`);
console.log('Good News! we find big Table so are inviting 3 more guests.')

// array me 3 Guest add kiye hain.
Guest_list.unshift('Sir Zia khan') ;
Guest_list.splice(2 , 0 , 'Maryum Nawaz');
Guest_list.push('Bilwal Bhutto');

// Yahan Per mene 6 guest ke array ko print krwya he.
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

// Sorry Message for not inviting.
console.log('\sorry we can not arrange big table, only two peoples will be invited.');

// Yahan Per mene Guest remove kiye hain.
while(Guest_list.length > 2){
   let remove_Guest = Guest_list.pop();
   console.log(`sorry Mr . ${remove_Guest}, You are not invited for Dinners`);
}

// Hamare bache howe 2 invited Guest.
for(let i=0; i<Guest_list.length; i++){
    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}

// Mene sare guest array se remove kar Diye.
Guest_list.splice(0, 2);
console.log(Guest_list);