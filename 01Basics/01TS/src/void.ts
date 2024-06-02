type User = {
   props: {
      name: string
   }
}

// type CallbackFun = (user: User) => undefined;
type CallbackFun = (user: User) => void;

const users: User[] = []

const addUser = (user:User) => users.push(user)

function fetchUserServer(url: string, callback: CallbackFun) {
   console.log(`Simulating as async HTTP request to "${url}".`)

   setTimeout(() => {
      callback({
         props: {
            name: 'Benny',
         },
      })
   }, 2000)
}