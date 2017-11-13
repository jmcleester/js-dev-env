import '../css/index.css';

import numeral from 'numeral';
import {getUsers} from './api/userAPI';

getUsers().then(result => {
	let usersBody = "";

	result.forEach(user => {
	usersBody+= `<tr>
		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
		<td>${user.id}</td>
		<td>${user.Name}</td>
		</tr>`
	});
	global.document.getElementById('users').innerHTML = usersBody;
});


const courseVal = numeral(100).format('$0,0.00');

console.log(`pay ${courseVal} for this package`); // eslint-disable-line no-console
