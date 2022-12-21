const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
const usersNames = users.map(user => {
    if (user.name[0] === 'A') { // Si un name empieza por A
    return {...user, name: 'Anacleto'};//copia user y devuelve anacleto
    }
    return user;
    });
    
    console.log(usersNames);