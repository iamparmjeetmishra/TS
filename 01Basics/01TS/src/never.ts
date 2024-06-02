interface StreamResponse {
   status: StreamStatus;
}

type StreamStatus = 'ONLINE' | 'OFFLINE'

function handleResponse(response: StreamResponse): void {
   switch (response.status) {
      case 'ONLINE':
         console.log('You are online')
         break;
      case 'OFFLINE':
         console.log('You are offline')
         break;
      default:
         const status: never = response.status;
         throw new Error(`Unknown statu "${status}"!`)
   }
}