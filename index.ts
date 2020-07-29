import { interval, Observable } from 'rxjs';
import {map, filter} from 'rxjs/operators'

function getTelecast():Observable<any> {
   return interval(1000);
}

getTelecast().subscribe((data) => {
  console.log(data);
})

console.log('If we want to modify the data before subscribe then we have to use, pipe and map operator !!!');


// Modify the real data using map

getTelecast().pipe(map(data => data*2)).subscribe((data) => {
  console.log(data, 'updatetd values');
})

// Filter Real data -> Act like Body guard -> will decide, what is subscribe and what not.

const observableData = getTelecast().pipe(filter((data) => {
   return data < 20
}))

observableData.subscribe(data => {
  console.log(data, 'filter method Implemented');
})