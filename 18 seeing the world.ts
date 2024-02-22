
// store the Location in a array. Make sure the aray is not in alphabetical ordewr.
let places :string[] = ['Italy', 'Germany', 'agra', 'Eifel Tower', 'Times Square'];

//Print your array in its original order.
console.log('original ' + places);

//print your array in aplhabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());

// Show that your arrayis still in its original order by printing it.
console.log('original ' + places);

// Print your array in reversre alphabetical order without changing the order of the original list.
console.log('original ' + [...places].sort().reverse());

// show that is your array is still in its original order by printing it again.
console.log('original' + places);

//Reverse the order of your list. Print the array to show that its order the changed.
console.log('original ' + places.reverse());

//Reverse the order of your list again. Print the list to show it's back to its Original order.
console.log('original ' + places.reverse());

// Start you array so it it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log('original ' + places.sort());

// sort to change your array so it's stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());