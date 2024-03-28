import { HttpResponse, http } from 'msw'

export const handlers = [
  http.get('/items', () => {
    return HttpResponse.json([{
      name: 'John',
    }])
  }),

]
